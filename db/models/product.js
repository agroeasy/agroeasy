import mongoose from 'mongoose';
import mongoosastic from 'mongoosastic';

import esClient from '../../esClient';

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    createdAt: { type: Date },
    deletedAt: { type: Date },
    name: { es_indexed:true, required: true, type: String },
    producerId: {  es_indexed:true, required: true, type: String },
    productTypes: { es_indexed:true, required: true, type: String },
    quantity: { es_indexed:true, required: true, type: Number },
    updatedAt: { type: Date },
}, { versionKey: false });

ProductSchema.plugin(mongoosastic, {
    esClient,
    index: "all_product",
    type: "products",
});

const Product = mongoose.model('Product', ProductSchema);

/* const stream = Product.synchronize();
let count = 0;

stream.on('data', (err, doc) => {  
    count++;
});
stream.on('close', () => {
    console.log(`indexed ${count} documents!`);
});
stream.on('error', err => {
    console.log(err);
}); */

export default Product;
