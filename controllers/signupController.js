const User = require('../models/user');

module.exports = {
    signUpUser: async (req, res) => {

        let user = new User();

        const {
            email,
            username,
            password
        } = req.body;

        user = Object.assign(user, {
            email,
            username,
            password
        });

        if(!email || !password){
            return res.send({ success: false, message: 'email or password cannot be blank' });
        }
        /* 
         email = email.toLowerCase();
         email = email.trim();
 */
        // 1. Verify email doesn't exist
        User.find({
            email: email
        }, (err, previousUsers) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Error: Server error'
                });
            } else if (previousUsers.length > 0) {
                return res.send({
                    success: false,
                    message: 'Error: Account already exist.'
                });
            }
        });

        // Save the new user
        try {
            await user.save();
            return res.send({
                success: true,
                message: 'Signed up'
            });
        }catch(err){
            res.send({ success: false, err });
        }
    }, //end of signup end point.
    //This does not log the user in, but does create an account via API.
};
