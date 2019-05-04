import bcrypt from 'bcrypt-nodejs';
import _pick from 'lodash.pick';
import {
    NOT_FOUND,
    INTERNAL_SERVER_ERROR,
    OK,
    getStatusText,
    UNAUTHORIZED
} from 'http-status-codes';

import CONSTANTS from './constants';
import models from '../../db/models/';

const { User, UserSession } = models;
const {
    FAIL,
    INVALID_SIGNIN,
    LOGOUT,
    NO_EMAIL_PASSWORD,
    SUCCESS,
    USER_NOT_FOUND,
    USERINFO
} = CONSTANTS;

export default {
    // finds all users in the db
    allUsers: async (req, res) => {
        try {
            const data = await User.find();
            return res.status(OK).json({ data, status: SUCCESS });
        } catch (error) {
            return res
                .status(INTERNAL_SERVER_ERROR)
                .send({ error: getStatusText(INTERNAL_SERVER_ERROR), status: FAIL });
        }
    },

    logout: async (req, res) => {
        try {
            const { token } = req.query;

            await UserSession.findOneAndUpdate(
                {
                    _id: token,
                    isDeleted: false
                },
                {
                    $set: {
                        isDeleted: true
                    }
                },
                null
            );

            return res.send({
                message: LOGOUT,
                success: true
            });
        } catch (err) {
            res.send({ err, success: false });
        }
    },

    signInUser: async (req, res) => {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(NOT_FOUND).json({
                data: { title: NO_EMAIL_PASSWORD },
                status: FAIL
            });
        }

        try {
            const user = await User.findOne({ email });

            if (!user) {
                return res.status(NOT_FOUND).json({
                    data: { title: USER_NOT_FOUND },
                    status: FAIL
                });
            }

            const userSession = Object.assign(new UserSession(), { userId: user._id });
            const doc = await userSession.save();

            bcrypt.compare(password, user.password, (error, result) => {
                const data = result
                    ? {
                          data: {
                              token: doc._id,
                              user: _pick(user, USERINFO)
                          },
                          status: SUCCESS
                      }
                    : {
                          data: {
                              error,
                              title: INVALID_SIGNIN
                          },
                          status: FAIL
                      };

                const status = result ? OK : UNAUTHORIZED;

                return res.status(status).json(data);
            });
        } catch (error) {
            return res
                .status(INTERNAL_SERVER_ERROR)
                .send({ error: getStatusText(INTERNAL_SERVER_ERROR), success: false });
        }
    }
};
