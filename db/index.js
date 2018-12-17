'use strict';
import mongoose from 'mongoose';
// const mongoose = require('mongoose');
import { MONGO_DB_URL } from './config';
// const { MONGO_DB_URL } = require('./config');

mongoose.Promise = global.Promise;

// Set up mongoose connection
const connectToDb = () => {
    mongoose.connect(MONGO_DB_URL, { useNewUrlParser: true }, () =>
        // eslint-disable-next-line no-console
        console.error.bind(console, 'MongoDB connection error:')
    );
};

export default connectToDb ;
