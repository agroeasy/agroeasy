import { FETCH_USER_DATA } from './actionTypes';

const initialState = {
    error: null,
    userInfo: {},
};

export default (state = { ...initialState }, action ) => {
    switch(action.type){

    case FETCH_USER_DATA: 
       
        return {
            ...state,
            userInfo: action.data,
        };

    default:
        return state;
    }
};
