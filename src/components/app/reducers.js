import Cookies from 'cookies-js';

import { SET_COOKIE, REMOVE_COOKIE } from './actionTypes';
import { EXPIRATION } from './constants';

const initialState = {
    loggedIn: false,
};

export default ( state = { ...initialState }, action) => {
    switch (action.type) {
    case SET_COOKIE:    {
        const { payload: token } = action;
        Cookies.set(token, { expires: EXPIRATION });

        return {
            ...state,
            loggedIn: true,

        };
    }
    case REMOVE_COOKIE: {
        const { payload: token } = action;
        Cookies.expire(token);
        
        return {
            ...state,
            loggedIn: false,
        };
    }
    default:
        return state;
    }
}; 
