/* Signin Form Strings*/
export const NAME = 'signin';

export const SIGNIN_STRINGS = {
    FAIL_MESSAGE: "Unsuccessful sigin, check your username or password",
    PRIMARY: "primary",
    SUCCESS: "success",
    SUCCESS_MESSAGE: "You have  successfully sigined in",
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

export const SIGNIN_URL = "/account/signin";
