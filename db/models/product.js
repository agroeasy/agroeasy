import mongoose from 'mongoose';
import mongoosastic from 'mongoosastic';

import esClient from '../../esClient';

const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
    cost: {  es_indexed:true, required: true, type: Number },
    description: { es_indexed:true, required: true, type: String },
    name: { es_indexed:true, required: true, type: String },
    producerId: { es_indexed:true, required: true, type: String },
    quantity: { es_indexed:true, required: true, type: Number },
    type: { es_indexed:true, required: true, type: String },
}, { versionKey: false });

ProductsSchema.plugin(mongoosastic, {
    esClient,
    index: "productindex",
    type: "products",
});

const Product = mongoose.model('Product', ProductsSchema);

const stream = Product.synchronize();
let count = 0;

stream.on('data', (err, doc) => {  
    count++;
});
stream.on('close', () => {
    console.log(`indexed ${count} documents!`);
});
stream.on('error', err => {
    console.log(err);
}); 

export default Product;
