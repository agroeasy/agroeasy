'use strict';
const { connectionString } = require('../config/config');

// Set up mongoose connection
const mongoose = require('mongoose');
mongoose.connect(connectionString, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
