const bcrypt = require('bcrypt-nodejs');
const { Producer, User } = require('../../db/models/');
const { NO_EMAIL_PASSWORD, USER_EXIST, SIGNED_UP  } = require('./constants');

module.exports = {
    signUpUser: async (req, res) => {
        const {
            address,
            city,
            country,
            createdAt,
            deletedAt,
            email,
            firstName,
            lastName,
            password,
            phoneNumber,
            typeOfProducts,
            state,
            updatedAt,
            username,
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
         
        try { 
            await bcrypt.hash(password, null, null, (err, hash) => {
                user.password = hash;
            });

            const user = Object.assign(new User(), {
                address,
                city,
                country,
                createdAt,
                deletedAt,
                email,
                firstName,
                lastName,
                password,
                phoneNumber,
                state,
                updatedAt,
                username,
            });

            const producer = Object.assign( new Producer(), {
                typeOfProducts,
                userId: user._id,
            });

            /* if(isProducer){
                await producer.save();
            } */
            await producer.save();
            await user.save();
            return res.send({
                message: SIGNED_UP,
                success: true,
            });
        } catch(err) {
            res.send({ err, success: false });
        }  
    }, //end of signup end point.
    //This does not log the user in, but does create an account via API.
};
