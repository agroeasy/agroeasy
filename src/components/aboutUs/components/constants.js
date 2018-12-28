/* links of Navibar */
export const HOME = "/";
export const SUPPORT = "/about/";
export const PROFILE = "/profile/";
export const MARKET = "/market/";

//app logo
export const LOGO = {
    AVATAR: "home-avatar",
    SHAPE: "square",
    SIZE: "large",
    SOURCE: "/AgroeasyLogo.png",
};

export const USER_AVATAR = {
    CONTAINER: "avatar-container",
    ICON_TYPE: "user",
    SIGN_OUT: "Sign Out",
    USER_DROP_DOWN: "user-avatar-drop-down",
    USER_PROFILE: "User Profile",
};

export const CONTACT_US = {
    BACK: "back",
    CANCEL: "Cancel",
    EMAIL: "Email",
    MESSAGE: "Message",
    NAME: "Name",
    PRIMARY: "primary",
    SMALL: "small",
    SUBMIT: "Submit",
    TITLE: "Contact Us",
};

//strings from ListItems.js
export const SEARCH = {
    CENTER: "center",
    FLEX: "flex",
    LARGE: "large",
    SEARCH_PRODUCTS: "search products...",
};

//strings from Navibar.js
export const NAVBAR = {
    MAIN_NAV: "main-nav",
    MARKET_TEXT: "Market",
    NAV_MENU: "nav-menu",
    NAV_MODE: "horizontal",
    NAV_THEME: "dark",
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

// strings from Footer.js
export const FOOTER_CLASSNAMES = {
    CONTAINER: 'footer-container',
    DYNAMIC_FOOTER: 'ant-col-xs-24 ant-col-sm-24 ant-col-md-6',
    ROW: 'ant-row',
};

export const FOOTER_DATA = [{
    header: 'Product',
    items: [{ link: '', title: 'What is Argo Easy?' }, { link: '', title: 'Marketplace' }, { link: '', title: 'Sign Up' }],
    key: 'product',
}, {
    header: 'About Us',
    items: [{ link: '/aboutus/', title: 'Who is Argo Easy?' }],
    key: 'about',
}, {
    items: [{ link: '', title: 'All rights reserved, Copyright © 2018 Agroeasy.' }],
    key: 'rights',
}];
