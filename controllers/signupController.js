const User = require('../models/user');

module.exports = {
    signUpUser: async (req, res) => {
        const {
            email,
            username,
            password
        } = req.body;
        let user = new User();
        user = Object.assign(user, {
            email,
            username,
            password
        });

        if(!email || !password){
            return res.send({ success: false, message: 'email or password cannot be blank' });
        }

        try{
            const users = await User.findOne({ email  });
            if(users){
                return res.send({
                    success: false,
                    message: 'Error: Account already exist.'
                });
            }
        }catch(err){
            res.send({ err });
        }

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
