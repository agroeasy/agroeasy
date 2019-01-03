/* Signin Form Strings*/
export const NAME = 'signin';

export const SIGNIN_STRINGS = {
    CHECKBOX_REMINDER: "Remember me",
    PRIMARY: "primary",
    TITLE: "Sign in",
};

export const INPUTS = [
    {
        field: 'email',
        iconType: "user",
        placeholder: "Enter your username",
        rules: [{ message: "You have to input your username", required: true }],
    },
    {
        field: 'password',
        iconType: "lock",
        placeholder: "Enter your password",
        type: "password",
    },
];

export const SIGNIN_URL = "http://localhost:4000/account/signin";
