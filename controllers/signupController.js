const User = require('../models/user');
const { NO_EMAIL_PASSWORD, USER_EXIST, SIGNED_UP  } = require('./constants');
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
    signUpUser: async (req, res) => {
        const {
            email,
            username,
            password,
        } = req.body;
        
        if(!email || !password){
            return res.send({ message: NO_EMAIL_PASSWORD, success: false });
        }

        try{
            const previousUsers = await User.findOne({ email  });
            if(previousUsers){
                return res.send({
                    message: USER_EXIST,
                    success: false,
                });
            }
        } catch(err){
            res.send({ err });
        }
        
        // Save the new user
        /* try {
            await user.save();
            return res.send({
                message: SIGNED_UP,
                success: true,
            });
        } catch(err) {
            res.send({ err, success: false });
        } */
        try {
            const hashedPassword = await bcrypt.hash(password, saltRounds);
            const user = Object.assign(new User(), {
                email,
                password: hashedPassword,
                username,
            });
            await user.save();
            return res.send({
                message: SIGNED_UP,
                success: true,
            });
        }catch(err) {
            res.send({ err, success: false });
        }  

    }, //end of signup end point.
    //This does not log the user in, but does create an account via API.
};
