import { RESET_STATE, SIGNIN_FAILURE, SIGNIN_REQUEST, SIGNIN_SUCCESS } from './actionTypes';

const initialState = {
    email: "",
    error: null,
    isLoading:false,
    password: "",
};

export default ( state = { ...initialState }, action) => {

    switch(action.type){
    case SIGNIN_REQUEST: {
        const { payload: { email, password } } = action;
        return {
            ...state,
            email,
            error: null,
            isLoading: true,
            password,
        };
    }

    case SIGNIN_SUCCESS:{
        const { payload: { data, status } } = action;
        return {
            ...state,
            data,
            error: null,
            isLoading: false,
            status,
        };
    }

    case RESET_STATE:
        return { ...initialState };
        
    case SIGNIN_FAILURE:{
        const { error } = action;
        return {
            ...state,
            email: "",
            error,
            isLoading: false,
            password: "",
        };
    }
    default:
        return state;
    }
};
