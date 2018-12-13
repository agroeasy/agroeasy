import { SIGNUP_FAILURE, SIGNUP_SUCCESS, SIGNUP_REQUEST } from './actionTypes';

const initialState = {
    data: [],
    error: null,
    registered:false, 
};
  
const signUpReducer  = (state = initialState, action) => {
    switch (action.type) {
    case SIGNUP_REQUEST:
        return{
            ...state,
            data: [],
            error: null,
            registered: false,
        };

    case SIGNUP_SUCCESS:
        return {
            ...state,
            data: action.data,
            registered: true,
        };
           
    case SIGNUP_FAILURE:
        return {
            ...state,
            data:[],
            error: action.error,
        };
  
    default:
        return state;
    }
};
  
export default signUpReducer;
