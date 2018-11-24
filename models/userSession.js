const mongoose = require('mongoose');
const UserSessionSchema = new mongoose.Schema({
    isDeleted: {
        default: false,
        type: Boolean,
    },
    timestamp: {
        default: Date.now(),
        type: Date,
    },
    userId: {
        default: '',
        type: String,
    },
});
module.exports = mongoose.model('UserSession', UserSessionSchema);
