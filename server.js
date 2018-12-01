const bodyParser = require('body-parser');
const express = require('express');
const http = require('http');
const path = require('path');
const cors = require('cors');

const { connectToDB } = require('./db/db');
const router = require('./routes');

const app = express();
const server = http.createServer(app);
const { PORT = 4000 } = process.env;

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(__dirname));

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
