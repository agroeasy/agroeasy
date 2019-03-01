import mongoose from 'mongoose';
import mongoosastic from 'mongoosastic';

import esClient from '../../esClient';

const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
    cost: { required: true, type: Number },
    description: { required: true, type: String },
    name: { required: true, type: String },
    producerId: { required: true, type: String },
    quantity: { required: true, type: Number },
    type: { required: true, type: String },
}, { versionKey: false });

ProductsSchema.plugin(mongoosastic, {
    esClient,
    index: "all_product",
    type: "products",
});

const Product = mongoose.model('Product', ProductsSchema);

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
