import mongoose from 'mongoose';
import mongoosastic from 'mongoosastic';

import esClient from '../../esClient';
//import User from './user';

const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
    cost: { es_indexed: true, required: true, type: Number },
    description: { es_indexed: true, required: true, type: String },
    imageId: { type: String },
    imageUrl: { type: String },
    name: { es_indexed: true, required: true, type: String },
    producerId: { es_indexed: true, required: true, type: String },
    quantity: { es_indexed: true, required: true, type: Number },
    type: { es_indexed: true, required: true, type: String },
}, { versionKey: false });

ProductsSchema.plugin(mongoosastic, {
    esClient,
    index: "productindex",
    type: "products",
});

const Product = mongoose.model("Product", ProductsSchema);

export default Product;
