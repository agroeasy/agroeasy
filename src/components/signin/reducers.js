import { SIGNIN_FAILURE, SIGNIN_REQUEST, SIGNIN_SUCCESS } from './actionTypes';

const initialState = {
    email: "",
    error: null,
    isLoading:false,
    message: "",
    password: "",
};

export default ( state = initialState, action) => {
    switch(action.type){
    case SIGNIN_REQUEST:
        return {
            ...state,
            email: action.payload.email,
            error: null,
            isLoading: true,
            password: action.payload.password,
        };

    case SIGNIN_SUCCESS:{
        const { message, success: isSigninSuccessful } = action.data;
        return {
            ...state,
            email: "",
            error: null,
            isLoading: false,
            isSigninSuccessful,
            message,
            password: "",
        };
    }

    case SIGNIN_FAILURE:
        return {
            ...state,
            email: "",
            error: action.error,
            isLoading: false,
            isSigninSuccessful: false,
            password: "",
        };
    default:
        return state;
    }
};
