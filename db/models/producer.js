import mongoose from 'mongoose';

// const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProducersSchema = new Schema({
    typeOfProducts: {  type: Array },
    userId: { type: String },
}, { versionKey: false });

export default mongoose.model('Producer', ProducersSchema);
