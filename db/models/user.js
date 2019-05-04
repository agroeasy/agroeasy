import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        address: { required: true, type: String },
        city: { required: true, type: String },
        country: { required: true, type: String },
        email: { required: true, type: String },
        firstName: { required: true, type: String },
        lastName: { required: true, type: String },
        password: { required: true, type: String },
        phoneNumber: { required: true, type: String },
        state: { required: true, type: String },
        username: { type: String }
    },
    { versionKey: false }
);

export default mongoose.model('User', UserSchema);
