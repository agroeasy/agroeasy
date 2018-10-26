// schema/mongoose.js
// import dependency
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create new instance of the mongoose.schema. the schema takes an object that shows
// the shape of your database entries.
const ProductsSchema = new Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  producerId: { type: String, required: true },
  typeOfProduct: { type: String, required: true },
  createdAt: { type: Date },
  updatedAt: { type: Date },
  deletedAt: { type: Date }
}, { versionKey: false });

// export our module to use in server.js
module.exports = mongoose.model('Product', ProductsSchema);
