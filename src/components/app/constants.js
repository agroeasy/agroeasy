/* eslint-disable max-len */
/* eslint-disable sort-keys */
/** @constant */
export const NAME = 'app';

/** @constant */
export const PROFILE = '/profile/';

/** @constant */
export const MARKET_TEXT = 'Market';

/** @constant */
export const LOGO = {
    AVATAR: 'home-avatar',
    SHAPE: 'square',
    SIZE: 'large',
    SOURCE: '/AgroeasyLogo.png',
};

/** @constant */
export const NAVBAR = {
    LEFT_NAV_MENU: 'left-nav-menu',
    MAIN_NAV: 'main-nav',
    MARKET_TEXT: 'Market',
    NAV_MENU: 'nav-menu',
    NAV_MODE: 'horizontal',
    NAV_THEME: 'dark',
    RIGHT_NAV_MENU: 'right-nav-menu',
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

/** @constant */
export const USER_AVATAR = {
    CONTAINER: 'avatar-container',
    ICON_TYPE: 'user',
    SIGN_OUT: 'Sign Out',
    USER_DROP_DOWN: 'user-avatar-drop-down',
    USER_PROFILE: 'User Profile',
};

/** @constant */
export const FOOTER_DATA = [
    {
        header: 'Product',
        items: [{ title: 'What is Argo Easy?' }, { title: 'Marketplace' }, { title: 'Sign Up' }],
        key: 'product',
    },
    {
        header: 'About Us',
        items: [
            { link: '/about', title: 'Who is Argo Easy?' },
            { title: 'Our Mission' },
            { title: 'Our Customers' },
        ],
        key: 'about',
    },
    {
        header: 'Support',
        items: [{ title: 'Contact Us' }, { title: 'Report Abuse' }, { title: 'FAQ' }],
        key: 'support',
    },
    {
        header: 'AgroEasy',
        items: [
            { title: 'Privacy Policy' },
            { title: 'Terms And Conditions' },
            { title: 'Report Abuse' },
        ],
        key: 'rights',
    },
];

/** @constant */
export const FOOTER_CLASSNAMES = {
    CONTAINER: 'footer-container',
    DYNAMIC_FOOTER: 'ant-col-xs-24 ant-col-sm-24 ant-col-md-6',
    ROW: 'ant-row',
    FOOTER2: 'footer2',
};

/** @constant */
export const BANNER_DATA = [
    {
        icon: 'car',
        header: 'Fast Delivery',
        body:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        key: 'fast',
    },
    {
        icon: 'dollar',
        header: 'Price Minimization',
        body:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        key: 'price',
    },
    {
        icon: 'rest',
        header: 'Reduce Food Wastage',
        body:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        key: 'food',
    },
    {
        icon: 'team',
        header: 'Social Economic Driven',
        body:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        key: 'social',
    },
];

export const BANNER_HEADING = 'Why You Need Us';
export const LEARN_MORE = 'Learn More >>';
export const FOOTER_STRING = 'All rights reserved, Copyright © 2019 Agroeasy.';

/** @constant */
export const BANNER_CLASSNAMES = {
    BANNER: 'banner',
    BANNER_FLEX: 'banner_flex',
    BANNER_CARD: 'banner_card',
    BANNER_ICON: 'banner_icon',
    BANNER_COLOR: 'banner_color',
};

export const VALID_SIGNOUT = 'You have been signed out';

export const SIGN_URL = '/api/signin';
