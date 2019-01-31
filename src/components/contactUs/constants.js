
export const CONTACT_STRINGS = {
    BTN_MAIL: "btn-mail",
    CONTACT_US: "contactUs",
    DEFAULT: "primary", 
    LARGE: "large", 
    MAIL: "mail", 
    MSG_NOT_SENT: "message not sent",
    MSG_SENT:"message succesfully sent",
    PLACEHOLDER: "Your Message here...",
};

export const INPUTS = [
    {
        field: "name",
        iconType: "user",
        placeholder: "Enter your username",
        rules: [{ message: "You have to input your username", required: true }],
    },
    {
        field: "email",
        iconType: "mail",
        placeholder: "Please enter your email",
    },
    {
        field: "subject",
        iconType: "info",
        placeholder: "Subject",
    },
];
export const NAME = "contactus";
export const CONTACT_URL = "/account/sendmail";
