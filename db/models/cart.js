import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const CartSchema = new Schema(
    {
        amount: { default: 0, type: Number },
        product: { ref: 'Product', required: true, type: ObjectId },
        quantity: { default: 1, type: Number },
        user: { ref: 'User', required: true, type: ObjectId },
    },
    { timestamps: true, versionKey: false },
);

export default mongoose.model('Cart', CartSchema);
