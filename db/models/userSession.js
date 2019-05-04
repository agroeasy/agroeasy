import mongoose from 'mongoose';

const UserSessionSchema = new mongoose.Schema({
    isDeleted: {
        default: false,
        type: Boolean
    },
    timestamp: {
        default: Date.now(),
        type: Date
    },
    userId: {
        default: '',
        type: String
    }
});

export default mongoose.model('UserSession', UserSessionSchema);
