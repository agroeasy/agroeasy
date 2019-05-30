/* Signin Form Strings*/
export const NAME = 'signin';

export const SIGNIN_BUTTON = "signIn_Button";

export const INPUTS = [
    {
        field: 'email',
        iconType: "user",
        placeholder: "Enter your email",
        rules: [{ message: "You have to input your email", required: true }],
    },
    {
        field: 'password',
        iconType: "lock",
        placeholder: "Enter your password",
        type: "password",
    },
];

export const SIGNIN_URL = "/account/signin";
