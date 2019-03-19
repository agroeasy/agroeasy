import './env';
import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import express from 'express';
import expressStaticGzip from 'express-static-gzip';
import http from 'http';
import path from 'path';

import connectToDb from './db';
import router from './routes';

const app = express();
const appPath = __dirname;
const isDevEnv = process.env.NODE_ENV !== 'production';
const server = http.createServer(app);
const { PORT = 4000 } = process.env;

// Add compression logic and handle compressed files
app.use(compression());

/* Cross-Origin Resource Sharing CORS
To enable access of resources from our server */
isDevEnv && app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', router);
app.use('/', expressStaticGzip(appPath, {
    enableBrotli: true,
    orderPreference: ['br', 'gz'],
}));

app.get('*', (req, res) => res.sendFile(path.resolve(appPath, 'index.html')));

server.listen(PORT, async() => {
    await connectToDb();
    console.log(`Listening on port ${PORT}`); // eslint-disable-line no-console
});
