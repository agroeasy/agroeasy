/* Signin Form Strings*/
export const NAME = 'signin';

export const SIGNIN_BUTTON = "signin_button";
export const SIGNIN_URL = "/account/signin";
export const SIGN = "Signin";

export const INPUTS = [
    {
        field: 'email',
        iconType: 'user',
        placeholder: 'Enter your email',
        rules: [{ message: 'You have to input your email', required: true }],
    },
    {
        field: 'password',
        iconType: 'lock',
        placeholder: 'Enter your password',
        type: 'password',
    },
];
