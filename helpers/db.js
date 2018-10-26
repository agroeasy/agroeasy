'use strict';
const { MONGO_DB_URL } = require('../config/config');

// Set up mongoose connection
const mongoose = require('mongoose');
mongoose.connect(MONGO_DB_URL, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
