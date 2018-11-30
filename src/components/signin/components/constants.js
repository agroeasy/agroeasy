/* Signin Form Strings*/
export const SIGNIN_STRINGS = {
    CHECKBOX_REMINDER: "Remember me",
    CHECKED: "checked",
    DESCRIPTION: "description",
    PRIMARY: "primary",
    REMEMBER: "remember",
    TITLE: "Sign in",
    TITLE_1: "title",
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
