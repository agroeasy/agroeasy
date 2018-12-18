import _pick from 'lodash.pick';
import bcrypt from 'bcrypt-nodejs';

import CONSTANTS from './constants';
import models from '../../db/models/';

const { Producer, User } = models;
const { NO_EMAIL_PASSWORD, SIGN_UP_KEYS, USER_EXIST, SIGNED_UP  } = CONSTANTS;

export default {
    signUpUser: async (req, res) => {
        // https://lodash.com/docs/4.17.11#pick
        const userData = _pick(req.body, SIGN_UP_KEYS);
        const { email, password, typeOfProducts } = req.body;

        if(!email || !password){
            return res.send({ message: NO_EMAIL_PASSWORD, success: false });
        }

        try{
            const previousUsers = await User.findOne({ email });

            if (previousUsers) {
                return res.send({
                    message: USER_EXIST,
                    success: false,
                });
            }
        } catch(err){
            res.send({ err });
        }

        try {
            const user = Object.assign(new User(), userData);

            await bcrypt.hash(password, null, null, (err, hash) => {
                user.password = hash;
            });
            await user.save();

            // TODO: Check that the type of product is valid before creating the
            // producer
            if(typeOfProducts) {
                const producer = Object.assign(new Producer(), {
                    typeOfProducts,
                    userId: user._id,
                });

                await producer.save();
            }

            return res.send({
                message: SIGNED_UP,
                success: true,
            });
        } catch(error) {
            res.send({ error, success: false });
        }
    },
    //This does not log the user in, but does create an account via API.
};
