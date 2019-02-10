import Cookies from 'cookies-js';

import { SET_COOKIE, REMOVE_COOKIE } from './actionTypes';
import { EXPIRATION } from './constants';

const initialState = {
    loggedIn: false,
    token: "",
};

export default ( state = { ...initialState }, action) => {
    
    switch (action.type) {
    case SET_COOKIE:    {
        const { token } = action;
        Cookies.set(token, { expires: EXPIRATION });

        return {
            ...state,
            loggedIn: true,
            token,
        };
    }
    case REMOVE_COOKIE: {
        Cookies.expire(state.token);
        
        return { ...initialState };
    }
    default:
        return state;
    }
}; 
