'use strict';
const mongodbUrl = require('../config/config');

// Set up mongoose connection
const mongoose = require('mongoose');
mongoose.connect(mongodbUrl.connectionString, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
