/** @constant */
export const NAME = 'app';

/** @constant */
export const PROFILE = "/profile/";

/** @constant */
export const MARKET_TEXT = 'Market';

/** @constant */
export const LOGO = {
    AVATAR: "home-avatar",
    SHAPE: "square",
    SIZE: "large",
    SOURCE: "/AgroeasyLogo.png",
};

export const NAVBAR = {
    MAIN_NAV: "main-nav",
    MARKET_TEXT: "Market",
    NAV_MENU: "nav-menu",
    NAV_MODE: "horizontal",
    NAV_THEME: "dark",
};

/** @constant */
export const PATHS = {
    CONTACT: '/contact',
    HOME: '/',
    MARKET: '/market',
    PROFILE: '/profile',
    SIGN_IN: '/signin',
    SIGN_UP: '/signup',
};

export const USER_AVATAR = {
    CONTAINER: "avatar-container",
    ICON_TYPE: "user",
    SIGN_OUT: "Sign Out",
    USER_DROP_DOWN: "user-avatar-drop-down",
    USER_PROFILE: "User Profile",
};

/** @constant */
export const FOOTER_DATA = [{
    header: 'Product',
    items: [
        { title: 'What is Argo Easy?' },
        { title: 'Marketplace' },
        { title: 'Sign Up' },
    ],
    key: 'product',
}, {
    header: 'About Us',
    items: [
        { link: '/who-is-Agro-Esay/', title: 'Who is Argo Easy?' },
        { title: 'Our Mission' },
        { title: 'Our Customers' },
    ],
    key: 'about',
}, {
    header: 'Support',
    items: [{ title: 'Contact Us' }, { title: 'FAQ' }],
    key: 'support',
}, {
    items: [{ title: 'All rights reserved, Copyright © 2018 Agroeasy.' }],
    key: 'rights',
}];

/** @constant */
export const FOOTER_CLASSNAMES = {
    CONTAINER: 'footer-container',
    DYNAMIC_FOOTER: 'ant-col-xs-24 ant-col-sm-24 ant-col-md-6',
    ROW: 'ant-row',
};

export const VALID_SIGNOUT = "You have been signed out";

export const SIGNIN_SUCCESS = "Hello";

export const EXPIRATION = 86400000;
