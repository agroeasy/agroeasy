/* links of Navibar */
export const HOME = "/";
export const SUPPORT = "/about/";
export const MARKET = "/market/";

export const CONTACT_STRINGS = {
    PLACEHOLDER: "Your Message here...",
    PRIMARY: "primary",
    TITLE: "Contact Us",
};

//strings from ListItems.js
export const SEARCH = {
    CENTER: "center",
    FLEX: "flex",
    LARGE: "large",
    SEARCH_PRODUCTS: "search products...",
};

//strings from Home.js
export const HOME_STRINGS = {
    BG_IMG: 'bg-img',
    SEARCH: "search",
    SM_IMG: "sm-img",
    WELCOME_TEXT_1: "Welcome Guest",
    WELCOME_TEXT_2: "Make us your distributor and we will tell the world about your business.",
    WELCOME_TEXT_3: `Dear customer, we make sure you get a discount anytime you
        patronize us. Give us a try.`,
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
export const NAME = "home";
export const CONTACT_URL = "/account/sendmail";
