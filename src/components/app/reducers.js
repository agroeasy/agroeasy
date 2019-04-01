import Cookies from 'cookies-js';

import {
    CHECK_USER_LOGIN_STATUS,
    SET_COOKIE,
    REMOVE_COOKIE,
    RESET_STATE,
    RESET_STATUS_STATE
} from './actionTypes';
import { EXPIRATION } from './constants';

const initialState = {
    isLoggedIn: null,
    status: "",
    token: "",
    user: {},
};

export default ( state = { ...initialState }, action) => {
    
    switch (action.type) {
    case SET_COOKIE: {
        const { data: { token, user }, status } = action.payload;
        Cookies.set(token, user, { expires: EXPIRATION });

        return {
            ...state,
            isLoggedIn: true,
            status,
            token,
            user,
        };
    }

    case CHECK_USER_LOGIN_STATUS: {
        const user = Cookies.get(state.token);
        
        return {
            ...state,
            isLoggedIn: !!user,
        };
    }

    case REMOVE_COOKIE: {
        Cookies.expire(state.token);
        
        return {
            ...state,
            isLoggedIn: false,
            token: null,
            user: {},
        };
    }

    case RESET_STATE:
        return { ...initialState };

    case RESET_STATUS_STATE:
        return {
            ...state,
            status: "",
        };

    default:
        return state;
    }
};
