import { GET_USER_DATA } from './actionTypes';
import Auth from '../auth0/Auth';
const auth = new Auth();

const initialState = {
    isLoggedIn: auth.isAuthenticated(),
    user: {},
};

export default ( state = { ...initialState }, action) => {
    
    switch (action.type) {

    case GET_USER_DATA: {
        const { data: { user } } = action.payload; 
        return { 
            ...state,
            user,
        };
    }
    
    default:
        return state;
    }
}; 
