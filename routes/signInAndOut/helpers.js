import _pick from 'lodash.pick';
import jwtDecode from 'jwt-decode';
import { 
    NOT_FOUND, 
    INTERNAL_SERVER_ERROR, 
    OK, 
    getStatusText
} from 'http-status-codes';

import CONSTANTS from './constants';
import models from '../../db/models/';

const { User, UserSession } = models;
const {
    FAIL,
    LOGOUT,
    NO_EMAIL_PASSWORD,
    SUCCESS,
    USER_NOT_FOUND,
    USERINFO,
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
        try{
            const { token } = req.query;

            await UserSession.findOneAndUpdate(
                {
                    _id: token,
                    isDeleted: false,
                },
                { $set: {
                    isDeleted:true,
                },
                }, null);

            return res.send({
                message: LOGOUT,
                success: true,
            });
        } catch(err) {
            res.send({ err, success: false });
        }
    },

    signInUser: async (req, res) => {
        const { idToken } = req.query;
        const { email } = jwtDecode(idToken);

        if (!email) {
            return res.status(NOT_FOUND).json({
                data: { title: NO_EMAIL_PASSWORD },
                status: FAIL,
            });
        }

        try {
            const user = await User.findOne({ email });

            const status = user ? OK : NOT_FOUND;
            
            if(!user){
                //TODO: Grab the email and the name of the user to open a new account for the 
                //user, user can then update other informations later.
                return res.status(status).json({
                    data: { title: USER_NOT_FOUND },
                    status: FAIL,
                });
            } else {
                return res.status(status).json({
                    data: {
                        user: _pick(user, USERINFO),
                    },
                    status: SUCCESS,
                });
            }

        } catch(error) {
            return res
                .status(INTERNAL_SERVER_ERROR)
                .send({ error: getStatusText(INTERNAL_SERVER_ERROR), success: false });
        }
    },
};
