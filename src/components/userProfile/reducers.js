import { REQUEST_AUTH_USER_JWT } from './actionTypes';

const initialState = {
    user: {},
};

export default ( state = { ...initialState }, action) => {
    
    switch (action.type) {
    case REQUEST_AUTH_USER_JWT: {
        return {
            ...state,
        };
    }

    default:
        return state;
    }
}; 
