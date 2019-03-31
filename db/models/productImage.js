import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ProductImageSchema = new Schema({
    image_id: { type: String },
    image_url: { type: String },
}, { versionKey: false });

export default mongoose.model('ProductImage', ProductImageSchema);
