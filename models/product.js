//schema/mongoose.js
//import dependency
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create new instance of the mongoose.schema. the schema takes an object that shows
//the shape of your database entries.
const ProductsSchema = new Schema({
    name: String,
    quantity: Number,
    producerId: String,
    typeOfProduct: String,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date
});

//export our module to use in server.js
module.exports = mongoose.model('Product', ProductsSchema);