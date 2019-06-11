import _pick from 'lodash.pick';
import bcrypt from 'bcrypt-nodejs';
import { INTERNAL_SERVER_ERROR, OK, getStatusText, UNAUTHORIZED } from 'http-status-codes';

import CONSTANTS from './constants';
import models from '../../db/models/';

const { Producer, User } = models;
const {
    FAIL,
    NO_EMAIL_PASSWORD,
    SIGN_UP_KEYS,
    USER_EXIST,
    USERINFO,
    SUCCESS,
    SIGNED_UP,
} = CONSTANTS;

export default {
    signUpUser: async (req, res) => {
        // https://lodash.com/docs/4.17.11#pick
        const userData = _pick(req.body, SIGN_UP_KEYS);
        const { email, password, typeOfProducts } = req.body;

        if (!email || !password) {
            return res.status(UNAUTHORIZED).send({
                data: { title: NO_EMAIL_PASSWORD },
                status: FAIL,
            });
        }

        try {
            const previousUsers = await User.findOne({ email });

            if (previousUsers) {
                return res.status(UNAUTHORIZED).json({
                    data: { title: USER_EXIST },
                    status: FAIL,
                });
            }
        } catch (error) {
            res.status(INTERNAL_SERVER_ERROR).send({ error: getStatusText(INTERNAL_SERVER_ERROR) });
        }

        try {
            const user = Object.assign(new User(), userData);

            await bcrypt.hash(password, null, null, (err, hash) => {
                user.password = hash;
            });
            await user.save();

            if (typeOfProducts) {
                const producer = Object.assign(new Producer(), {
                    typeOfProducts,
                    userId: user._id,
                });

                await producer.save();
            }

            return res.status(OK).json({
                data: {
                    title: SIGNED_UP,
                    user: _pick(user, USERINFO),
                },
                status: SUCCESS,
            });
        } catch (error) {
            return res
                .status(INTERNAL_SERVER_ERROR)
                .json({ error: getStatusText(INTERNAL_SERVER_ERROR), success: false });
        }
    },
    //This does not log the user in, but does create an account via API.
};
