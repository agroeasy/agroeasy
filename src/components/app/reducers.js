import Cookies from 'cookies-js';

import { SET_COOKIE, REMOVE_COOKIE, RESET_STATE } from './actionTypes';
import { EXPIRATION } from './constants';

const initialState = {
    isLoggedIn: false,
    token: "",
    user: {},
};

export default ( state = { ...initialState }, action) => {
    
    switch (action.type) {
    case SET_COOKIE:    {
        const { token, user } = action.payload.data;
        Cookies.set(token, { expires: EXPIRATION });

        return {
            ...state,
            isLoggedIn: true,
            token,
            user,
        };
    }
    case REMOVE_COOKIE: {
        Cookies.expire(state.token);
        
        return { 
            ...initialState,
            isLoggedIn: null,
        };
    }
    case RESET_STATE:

        return { ...initialState };
    default:
        return state;
    }
}; 
