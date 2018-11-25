// schema/mongoose.js
// import dependency
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create new instance of the mongoose.schema. the schema takes an object that shows
// the shape of your database entries.
const ProducersSchema = new Schema({
    address: { required: true, type: String },
    country: { required: true, type: String },
    createdAt: { type: Date },
    deletedAt: { type: Date },
    firstName: { required: true, type: String },
    lastName: { required: true, type: String },
    localGovernment: { required: true, type: String },
    phoneNumber: { required: true, type: String },
    state: { required: true, type: String },
    typeOfProducts: { type: Array },
    updatedAt: { type: Date },

}, { versionKey: false });

// export our module to use in server.js
module.exports = mongoose.model('Producer', ProducersSchema);
