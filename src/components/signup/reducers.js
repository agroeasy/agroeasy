import { SIGNUP_FAILURE, SIGNUP_SUCCESS } from './actionTypes';

const initialState = {
    /*  errors: [],
    isLoading: false,
    messages: [],
    successful: false, */
    registering:false,
    
};
  
const signUpReducer  = (state = initialState, action) => {
    switch (action.type) {
   
    case SIGNUP_SUCCESS:
        return {
            /* errors: [],
            isLoading: false,
            messages: [{
                body: `Successfully created account for ${action.response.email}`,
                time: new Date(),
            }],
            successful: true, */
            registering:true,
        };
        
        // reset the state but with errors!
        // the error payload returned is actually far
        // more detailed, but we'll just stick with
        // the base message for now
    case SIGNUP_FAILURE:
        return {
            /* errors: state.errors.concat([{
                body: action.error.toString(),
                time: new Date(),
            }]),
            isLoading: false,
            messages: [],
            successful: false, */
        };
  
    default:
        return state;
    }
};
  
export default signUpReducer;
