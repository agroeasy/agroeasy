/* Signup Form Strings*/
export const SIGNUP_STRINGS = {
    AGREEMENT: "agreement",
    CLASSNAME_AGREEMENT: "agreementQuote",
    CLASSNAME_FORM: "signupForm",
    CLASSNAME_SCROLLBAR: "scrollBar",
    PRIMARY: "primary",
    READ: "I have read the ",
    REGISTER: "Register",
    TITLE: "Sign up",
};

export const formItemLayout = {
    labelCol: {
        sm: { span: 8 },
        xs: { span: 20 },
    },
    wrapperCol: {
        sm: { span: 16 },
        xs: { span: 20 },
    },
};

export const INPUTS = [
    {
        field: "email",
        label: "E-mail",
        rules: [{
            message: "The input is not valid E-mail!", type: "email",
        }, {
            message: "Please input your E-mail!", required: true,
        }],
    },
    {
        field: "firstName",
        label: "First name",
        rules: [{ message: "Please input your first name!", required: true }],
    },
    {
        field: "lastName",
        label: "Last name",
        rules: [{ message: "Please input your last name!", required: true }],
    },
    {
        field: "username",
        label: "Username",
        rules: [{ message: "Please input your username!", required: true  }],
    },
    {
        field: "city",
        label: "City",
        rules: [{ message: "Please input your city!", required: true }],
    },
    {
        field: "country",
        label: "Country",
        rules: [{ message: "Please input your Country!", required: true }],
    },
    {
        field: "state",
        label: "State",
        rules: [{ message: "Please input your State!", required: true }],
    },
    {
        field: "address",
        label: "Street Address",
        rules: [{ message: "Please input your Street Address!", required: true }],
    },
    {
        field: "phoneNumber",
        label: "Mobile Number",
        rules: [{ message: "Please input your Country!", required: true }],
    },
    {
        field: 'password',
        inputType: "password",
        label: "Password",
        rules: [{ message: "Please input your password!", required: true } ],
    },
    {
        field: 'confirm',
        inputType: "password",
        label: "Confirm password",
        rules: [{ message: "Please confirm your password!", required: true }],
    },
];

export const SIGNUP_URL = 'http://localhost:4000/account/signup';
