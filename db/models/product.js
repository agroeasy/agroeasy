import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
    createdAt: { type: Date },
    deletedAt: { type: Date },
    name: { required: true, type: String },
    producerId: { required: true, type: String },
    quantity: { required: true, type: Number },
    typeOfProducts: { required: true, type: String },
    updatedAt: { type: Date },
}, { versionKey: false });

export default mongoose.model('Product', ProductsSchema);
