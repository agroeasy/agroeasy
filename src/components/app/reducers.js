import { SET_USER_DATA, SET_LOGIN_STATUS } from './actionTypes';
import Auth from '../../auth0/Auth';
const auth = new Auth();

const initialState = {
    isLoggedIn: null,
    user: {},
};

export default ( state = { ...initialState }, action) => {
    
    switch (action.type) {

    case SET_USER_DATA: {
        const { data: { user } } = action.payload; 
        return { 
            ...state,
            isLoggedIn: auth.isAuthenticated(),
            user,
        };
    }

    case SET_LOGIN_STATUS: {
        return { 
            ...state,
            isLoggedIn: auth.isAuthenticated(),
        };
    }
    
    default:
        return state;
    }
}; 
