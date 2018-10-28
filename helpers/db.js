'use strict';
const mongoose = require('mongoose');

const { MONGO_DB_URL } = require('../config/config');

mongoose.Promise = global.Promise;

// Set up mongoose connection
const connectToDB = () => {
    mongoose.connect(MONGO_DB_URL, { useNewUrlParser: true }, () =>
        console.error.bind(console, 'MongoDB connection error:')
    );
};

module.exports = { connectToDB };
