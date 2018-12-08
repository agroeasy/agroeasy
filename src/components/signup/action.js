import { userConstants } from './actionTypes';
const { REGISTER_REQUEST } = userConstants;

const signupRequest = ({ email, password }) => ({
    email,
    password,
    type: REGISTER_REQUEST,
});

export default signupRequest;
