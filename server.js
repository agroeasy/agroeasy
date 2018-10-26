const bodyParser = require('body-parser');
const express = require('express');
const http = require('http');
const path = require('path');

const product = require('./routes/productRoute'); // Imports routes for the products
const producer = require('./routes/producerRoute'); // Imports routes for the producers
const { connectToDB } = require('./helpers/db');

const app = express();
const server = http.createServer(app);
const { PORT = 4000 } = process.env;

app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/products', product);
app.use('/producers', producer);

server.listen(PORT, async() => {
  await connectToDB();
  console.log(`Listening on port ${PORT}`);
});
