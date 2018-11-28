const bcrypt = require('bcrypt-nodejs');
const User = require('../models/user');
const UserSession = require('../models/userSession');
const {
    NO_EMAIL_PASSWORD,
    USER_NOT_FOUND,
    SUCCESSFUL_SIGNIN,
    LOGOUT,
    INVALID_SIGNIN } = require('./constants');

module.exports = {
    // finds all users in the db
    allUsers: async (req, res) => {
        try {
            const data = await User.find();
            return res.json({ data, success: true });
        } catch (err) {
            return res.json({ err, success: false });
        }
    },

    logout: async (req, res) => {
        // Get the token
        const { query } = req;
        const { token } = query;
        try{
            await UserSession.findOneAndUpdate(
                {
                    _id: token,
                    isDeleted: false,
                },
                { $set: {
                    isDeleted:true,
                },
                }, null);

            return res.send({
                message: LOGOUT,
                success: true,
            });
        } catch(err) {
            res.send({ err, success: false });
        }
    },

    signInUser: async (req, res) => {
        const { body } = req;
        const { password } = body;
        let { email } = body;

        if (!email || !password) {
            return res.send({
                message: NO_EMAIL_PASSWORD,
                success: false,
            });
        }

        email = email.toLowerCase().trim();
        let users;

        try {
            users = await User.findOne({ email });
            if(!users){
                return res.send({
                    message: USER_NOT_FOUND,
                    success: false,
                });
            }
        } catch(err) {
            return res.send({ err, success: false });
        }

        // Otherwise correct user
        const userSession = new UserSession();
        userSession.userId = users._id;
        try {
            const doc = await userSession.save();
            await bcrypt.compare(password, users.password, ( err, result ) => {
                if(result){
                    return res.send({
                        message: SUCCESSFUL_SIGNIN,
                        success: true,
                        token: doc._id,
                    });
                } else{
                    return res.send({ err, message: INVALID_SIGNIN });
                }
            });           
        } catch(err) {
            return res.send({ err, success: false });
        }
    },
};
