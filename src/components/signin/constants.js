/* Signin Form Strings*/
export const SIGNIN_STRINGS = {
    CHECKBOX_REMINDER: "Remember me",
    PRIMARY: "primary",
    TITLE: "Sign in",
};

export const INPUTS = [
    {
        field: 'title',
        iconType: "user",
        placeholder: "Enter your username",
        rules: [{ message: "You have to input your username", required: true }],
    },
    {
        field: 'description',
        iconType: "lock",
        placeholder: "Enter your password",
        type: "password",
    },
];
