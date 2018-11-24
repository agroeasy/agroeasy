const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: { type: String },
    password: { type: String },
    username: { type:String },
},{ versionKey:false });

module.exports = mongoose.model('User', UserSchema);
