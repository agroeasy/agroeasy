/* Signup Form Strings*/
export const SIGNUP_STRINGS = {
    CATEGORIES: "Select Categories",
    MESSAGE: "Please select category",
    MODE: "multiple",
    NO: "No",
    PRIMARY: "primary",
    PRODUCER: "Are you a producer?",
    PRODUCT_TYPE: "Product Type",
    RADIO_BUTTONS: "radio-buttons",
    RADIO_GROUP_FORM: "radio-group-form",
    REGISTER: "Register",
    SCROLLBAR: "scroll-bar",
    SMALL: "small",
    SOLID: "solid",
    TITLE: "Sign up",
    YES: "Yes",
};

export const FORM_ITEM_LAYOUT = {
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

export const PRODUCTS = [
    {
        category: "Agrochemicals",
        value: "agrochemicals",
    },
    {
        category: "Beans",
        value: "beans",
    },
    {    
        category: "Fruits",
        value: "fruits",
    },
    {
        category: "Grains",
        value: "grains",
    },
    {
        category: "Nuts",
        value: "nuts",
    },
    {
        category: "Pesticides",
        value: "pesticides",
    },
    {
        category: "Plants",
        value: "plants",
    },
    {
        category: "Rice",
        value: "rice",
    },
    {
        category: "Seeds",
        value: "seeds",
    },
    {
        category: "Seedlings",
        value: "seedlingss",
    },
    {
        category: "Vegetable",
        value: "vegetable",
    },
    {
        category: "Wheat",
        value: "wheat",
    },
    {
        category: "Other",
        value: "other",
    },
];
export const SIGNUP_URL = 'http://localhost:4000/account/signup';
