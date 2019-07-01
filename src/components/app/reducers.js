import { SET_USER_DATA, SET_LOGIN_STATUS, SET_CART_COUNT } from './actionTypes';
import Auth from '../../auth0/Auth';
const auth = new Auth();

const initialState = {
    cartCount: 0,
    isLoggedIn: null,
    user: {},
};

export default (state = { ...initialState }, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            const {
                data: { user },
            } = action.payload;
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

        case SET_CART_COUNT: {
            return {
                ...state,
                cartCount: action.payload,
            };
        }

        default:
            return state;
    }
};
