'use strict';
// Set up mongoose connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/agroeasyDB', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = {
  Product: require('../models/product'),
  Producer: require('../models/producer')
};
