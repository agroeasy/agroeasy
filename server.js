const express = require('express');
const bodyParser = require('body-parser');
const product = require('./routes/productRoute'); // Imports routes for the products
const producer = require('./routes/producerRoute'); // Imports routes for the producers
const app = express();
const mongoose = require('mongoose');


// Set up mongoose connection
mongoose.connect('mongodb://localhost/agroeasyDB');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use('/products', product);
app.use('/producers', producer);


const port = process.env.PORT || 4000;
app.listen(port, ()=>console.log(`Listening on port ${port}`));