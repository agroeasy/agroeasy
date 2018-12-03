const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');
const express = require('express');
const expressStaticGzip = require('express-static-gzip');
const http = require('http');
const path = require('path');

const { connectToDB } = require('./db/db');
const router = require('./routes');

const app = express();
const server = http.createServer(app);
const { PORT = 4000 } = process.env;

// Add compression logic and handle compressed files
app.use(compression());
app.use('/', expressStaticGzip(path.join(__dirname, 'dist'), {
    enableBrotli: true,
    orderPreference: ['br', 'gz'],
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/* Cross-Origin Resource Sharing CORS
To enable access of resources from our server */

if(process.env.NODE_ENV !== 'production'){
    app.use(cors());
}

app.use('/', router);

server.listen(PORT, async() => {
    await connectToDB();
    console.log(`Listening on port ${PORT}`); // eslint-disable-line no-console
});
