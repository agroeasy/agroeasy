const User = require('../models/user');
const UserSession = require('../models/userSession');
const { 
    NO_EMAIL_PASSWORD, 
    USER_NOT_FOUND, 
    SUCCESSFUL_SIGNIN, 
    LOGOUT } = require('./constants');

module.exports = {
    signInUser: async (req, res) => {
        const { body } = req;
        const { password } = body;
        let { email } = body;

        if (!email || !password) {
            return res.send({
                success: false,
                message: NO_EMAIL_PASSWORD
            });
        }

        email = email.toLowerCase().trim();
        let users;

        try {
            users = await User.findOne({ email, password });
            if(!users){
                return res.send({
                    success: false,
                    message: USER_NOT_FOUND
                });
            } 
        } catch(err){
            return res.send({ success: false, err });
        }
       
        // Otherwise correct user
        const userSession = new UserSession();
        userSession.userId = users._id;

        try{
            const doc = await userSession.save();
            return res.send({
                success: true,
                message: SUCCESSFUL_SIGNIN,
                token: doc._id
            });
        } catch(err){
            return res.send({ success: false, err });
        }
    },
     
    // finds all users in the db
    allUsers: async (req, res) => {
        try {
            const data = await User.find();
            return res.json({ success: true, data });
        } catch (err) {
            return res.json({ success: false, err });
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
                    isDeleted: false 
                }, 
                { $set: {
                    isDeleted:true 
                } 
                }, null);
                
            return res.send({
                success: true,
                message: LOGOUT
            });
        } catch(err){
            res.send({ success: false, err });
        }

    }
};
