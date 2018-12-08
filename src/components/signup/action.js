import { userConstants } from './actionTypes';
const { REGISTER_REQUEST } = userConstants;

const signupRequest = user => ({
    type: REGISTER_REQUEST,
    user,
});

export default signupRequest;
