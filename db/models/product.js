import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ProductsSchema = new Schema(
    {
        cost: { required: true, type: Number },
        description: { required: true, type: String },
        imageId: { type: String },
        imageUrl: { type: String },
        name: { required: true, type: String },
        producerId: { required: true, type: String },
        quantity: { required: true, type: Number },
        type: { required: true, type: String },
    },
    { versionKey: false },
);

export default mongoose.model('Product', ProductsSchema);
