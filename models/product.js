// schema/mongoose.js
// import dependency
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create new instance of the mongoose.schema. the schema takes an object that shows
// the shape of your database entries.
const ProductsSchema = new Schema({
    createdAt: { type: Date },
    deletedAt: { type: Date },
    name: { required: true, type: String },
    producerId: { required: true, type: String },
    quantity: { required: true, type: Number },
    typeOfProduct: { required: true, type: String },
    updatedAt: { type: Date },
}, { versionKey: false });

// export our module to use in server.js
module.exports = mongoose.model('Product', ProductsSchema);
