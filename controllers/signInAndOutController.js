const User = require('../models/user');
const UserSession = require('../models/userSession');

module.exports = {
    
    signInUser: async (req, res) => {
        const { body } = req;
        const { password } = body;
        let { email } = body;

        if (!email || !password) {
            return res.send({
                success: false,
                message: 'Error: Email or Password cannot be blank.'
            });
        }

        email = email.toLowerCase().trim();
        let users;

        try {
            users = await User.findOne({ email, password });
            if(!users){
                return res.send({
                    success: false,
                    message: 'Cannnot find any user with the email  or password'
                });
            } 
        } catch(err){
            res.send({ success: false, err });
        }
       
        // Otherwise correct user
        const userSession = new UserSession();
        userSession.userId = users._id;

        try{
            const doc = await userSession.save();
            return res.send({
                success: true,
                message: 'Valid sign in',
                token: doc._id
            });
        } catch(err){
            res.send({ success: false, err });
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
        // ?token=test
        // Verify the token is one of a kind and it's not deleted.
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
                message: 'Logged out'
            });
        } catch(err){
            res.send({ success: false, err });
        }

    }
};
