import mongoose from 'mongoose';
import mongoosastic from 'mongoosastic';

import esClient from '../../esClient';
//import User from './user';

const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
    cost: {  es_indexed: true, required: true, type: Number },
    description: { es_indexed: true, required: true, type: String },
    name: { es_indexed: true, required: true, type: String },
    /*    producer: { 
        es_indexed: true,
        es_schema: User,
        es_select: 'firstName lastName city email phoneNumber',
        ref: 'User', 
        type: Schema.Types.ObjectId,
    }, */
    producerId: { es_indexed: true, required: true, type: String },
    quantity: { es_indexed: true, required: true, type: Number },
    type: { es_indexed: true, required: true, type: String },
}, { versionKey: false });

ProductsSchema.plugin(mongoosastic, {
    esClient,
    index: "productindex",
    /*     populate: [
        { path: 'producer', select: 'firstName lastName city email phoneNumber' },
    ], */
    type: "products",
});

const Product = mongoose.model("Product", ProductsSchema);

export default Product;
