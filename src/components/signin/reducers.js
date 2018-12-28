import { SIGNIN_FAILURE, SIGNIN_REQUEST, SIGNIN_SUCCESS } from './actionTypes';

const initialState = {
    data: [],
    email: "",
    error: null,
    password: "",
};

export default ( state = initialState, action) => {
    switch(action.type){
    case SIGNIN_REQUEST:
        return {
            ...state,
            data:[],
            email: action.email,
            error: null,
            password: action.password,
        };

    case SIGNIN_SUCCESS:
        return {
            ...state,
            data: action.data,
            email: "",
            error: null,
            password: "",
        };

    case SIGNIN_FAILURE:
        return {
            ...state,
            data: [],
            email: "",
            error: action.error,
            password: "",
        };
    default:
        return state;
    }
};
