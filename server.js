import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import express from 'express';
import expressStaticGzip from 'express-static-gzip';
import http from 'http';

import connectToDb from './db';
import router from './routes';

const app = express();
const server = http.createServer(app);
const { PORT = 4000 } = process.env;

// Add compression logic and handle compressed files
app.use(compression());
app.use('/', expressStaticGzip(__dirname, {
    enableBrotli: true,
    orderPreference: ['br', 'gz'],
}));
app.use('/images', express.static(__dirname));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/* Cross-Origin Resource Sharing CORS
To enable access of resources from our server */

if(process.env.NODE_ENV !== 'production'){
    app.use(cors());
}

app.use('/', router);

server.listen(PORT, async() => {
    await connectToDb();
    console.log(`Listening on port ${PORT}`); // eslint-disable-line no-console
});
