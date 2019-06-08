export const USER_PAGE = {
    CLASSNAMES: {
        BIG_CONTENT: 'big-content',
        BIG_LAYOUT: 'big-layout',
        EDIT_BOTTON: 'edit-botton',
        EDIT_ICON: 'icon-edit',
        EDIT_PROFILE_BUTTON: 'edit-profile-button',
        HEADER_INFO: 'header-info',
        IMAGE_CONTAINER: 'image-container',
        INFO_CARD: 'info-card',
        INFO_DIV: 'info-div',
        MENU: 'menu',
        PROFILE_IMAGE: 'profile-image',
        ROW_CONTAINER: 'row-container',
        SIDER: 'sider',
        SM_CONTENT: 'sm-content',
        TITLE: 'title',
    },
    PROFILE_PIX: "./josh.jpg",
    STRINGS: {
        ADDRESS: 'Address :',
        CITY: 'City :',
        COUNTRY: 'Country :',
        DARK: 'dark',
        EDIT: 'edit',
        EMAIL: 'Email :',
        FIRST_NAME: 'First Name :', 
        GHOST: 'ghost',
        INLINE: 'inline',
        LAST_NAME: 'Last Name :',
        MEDIUM: 'medium',
        PHONE: 'Phone :',
        PRIMARY: 'primary',
        SMALL: 'small',
        SQUARE: 'square',
        USERNAME: 'Username',
    },
    TEXTS: {
        BASIC_INFO_TEXT: 'BASIC INFORMATION',
        CONTACT_INFO_TEXT: 'CONTACT INFORMATION',
        EDIT_PHOTO: 'Edit Photo',
        EDIT_PROFILE: '  Edit Profile',
        LOCATION_INFO_TEXT: 'LOCATION',
    },
};

// export const PROFILE_INFO = [{
//     heading: "BASIC INFOMATION",
//     info: [
//         { description: 'Josh', title: "First Name:" },
//         { description: 'Obinna', title: 'Last Name:' },
//         { description: 'male', title: 'Gender:' },  
//     ],
//     key: 'basic',
// }, {
//     heading: 'CONTACT INFOMATION',
//     info: [
//         { description: 'joshuaobinna@gmail.com',  title: "Email:" },
//         { description: '+2347061589692',  title: "Phone:" },
//     ],
//     key: "contact",
// }, {
//     heading: "LOCATION",
//     info: [
//         { description:  '24, Wilkie Crescent, Ikeja', title: "Address:" },
//         { description: "Lagos", title: 'City:' },
//         { description: "Nigeria", title: 'Country:' }, 
//     ],
//     key: "location",
// },
// ];

export const SIDE_MENU_ITEMS = [
    { iconType: "info-circle", label: "Account", link: '/profile' },
    { iconType: "message", label: "Messages" },
    { iconType: "notification", label: "Notifications" },
    { iconType: "shopping", label: "Purchases" },
    { iconType: "folder", label: "Items", link: "/profile/items" },
    { iconType: "setting", label: "Settings" },
    { iconType: "solution", label: "Help" },
];

export const USER_DATA_URL = "http://localhost:4000/account/signin/:id";
export const NAME = "userprofile";
