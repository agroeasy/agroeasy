import { SIGNUP_FAILURE, SIGNUP_SUCCESS, SIGNUP_REQUEST } from './actionTypes';

const initialState = {
    data: [],
    error: null,
    isLoading: false,
    registered:false, 
};
  
const signUpReducer  = (state = initialState, action) => {
    switch (action.type) {
    case SIGNUP_REQUEST:
        return{
            ...state,
            data: [],
            error: null,
            isLoading: true,
            registered: false,
        };

    case SIGNUP_SUCCESS:{
        const { message, success: isSignupSuccessful } = action.data;
        return {
            ...state,
            data: action.data,
            isLoading: false,
            isSignupSuccessful,
            message,
            registered: true,
        };
    }
           
    case SIGNUP_FAILURE:
        return {
            ...state,
            data:[],
            error: action.error,
            isLoading: false,
        };
  
    default:
        return state;
    }
};
  
export default signUpReducer;
