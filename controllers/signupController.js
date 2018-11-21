const User = require('../models/user');
const { NO_EMAIL_PASSWORD, USER_EXIST, SIGNED_UP  } = require('./constants');

module.exports = {
    signUpUser: async (req, res) => {
        const {
            email,
            username,
            password
        } = req.body;
        const user = Object.assign(new User(), {
            email,
            username,
            password
        });

        if(!email || !password){
            return res.send({ success: false, message: NO_EMAIL_PASSWORD });
        }

        try{
            const previousUsers = await User.findOne({ email  });
            if(previousUsers){
                return res.send({
                    success: false,
                    message: USER_EXIST
                });
            }
        } catch(err){
            res.send({ err });
        }

        // Save the new user
        try {
            await user.save();
            return res.send({
                success: true,
                message: SIGNED_UP
            });
        } catch(err){
            res.send({ success: false, err });
        }
    }, //end of signup end point.
    //This does not log the user in, but does create an account via API.
};
