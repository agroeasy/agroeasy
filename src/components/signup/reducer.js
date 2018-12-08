import { userConstants } from './actionTypes';
const { REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } = userConstants;

const initialState = {
    errors: [],
    isLoading: false,
    messages: [],
    successful: false,
};
  
const signupReducer  = (state = initialState, action) => {
    switch (action.type) {
    case REGISTER_REQUEST:
        return {
            errors: [],
            isLoading: true,
            messages: [{ body: 'Signing up...' }],
            successful: false,
        };

        // reset the state and add a body message of success!
        // remember our successful returned payload will be:
        // {"email": "of the new user", "id": "of the user"}
    case REGISTER_SUCCESS:
        return {
            errors: [],
            isLoading: false,
            messages: [{
                body: `Successfully created account for ${action.response.email}`,
                time: new Date(),
            }],
            successful: true,
        };
  
        // reset the state but with errors!
        // the error payload returned is actually far
        // more detailed, but we'll just stick with
        // the base message for now
    case REGISTER_FAILURE:
        return {
            errors: state.errors.concat([{
                body: action.error.toString(),
                time: new Date(),
            }]),
            isLoading: false,
            messages: [],
            successful: false,
        };
  
    default:
        return state;
    }
};
  
export default signupReducer;
