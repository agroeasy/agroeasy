'use strict';
import mongoose from 'mongoose';
import { MONGO_DB_URL } from './config';

mongoose.Promise = global.Promise;

// Set up mongoose connection
export default () => {
    mongoose.connect(MONGO_DB_URL, { useNewUrlParser: true }, () =>
        // eslint-disable-next-line no-console
        console.error.bind(console, 'MongoDB connection error:')
    );
};
