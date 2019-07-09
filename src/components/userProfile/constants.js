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

    FIELD_EMAIL: 'email',
    PROFILE_PIX: './josh.jpg',
    STRINGS: {
        ADDRESS: 'Address :',
        CITY: 'City :',
        COUNTRY: 'Country :',
        DARK: 'dark',
        DEFAULT: 'default',
        EDIT: 'edit',
        EDIT_USER_PROFILE: 'Edit User Profile',
        EMAIL: 'Email :',
        FIRST_NAME: 'First Name :',
        FORM_IN_MODAL: 'form_in_modal',
        GHOST: 'ghost',
        INFO_CIRCLE: 'info-circle',
        INLINE: 'inline',
        LAST_NAME: 'Last Name :',
        MODAL_WIDTH: '50%',
        NOT_EDITABLE_TEXT: 'This is not editable for now',
        PHONE: 'Phone :',
        PRIMARY: 'primary',
        SMALL: 'small',
        SQUARE: 'square',
        UPDATE: 'Update',
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

export const SIDE_MENU_ITEMS = [
    { iconType: 'info-circle', label: 'Account', link: '/profile' },
    { iconType: 'message', label: 'Messages' },
    { iconType: 'notification', label: 'Notifications' },
    { iconType: 'shopping', label: 'Purchases' },
    { iconType: 'folder', label: 'Items', link: '/profile/items' },
    { iconType: 'setting', label: 'Settings' },
    { iconType: 'solution', label: 'Help' },
];

export const SIGN_URL = '/api/signin';
export const NAME = '/userProfile';

export const PROFILE_INFO = [
    {
        heading: 'BASIC INFORMATION',
        info: [
            { field: 'firstName', title: 'First Name :' },
            { field: 'lastName', title: 'Last Name :' },
            { field: 'username', title: 'Username :' },
        ],
    },
    {
        heading: 'CONTACT INFORMATION',
        // eslint-disable-next-line prettier/prettier
        info: [
            { field: 'email', title: 'Email :' }, 
            { field: 'phoneNumber', title: 'Phone :' },
    ],
    },
    {
        heading: 'LOCATION',
        info: [
            { field: 'address', title: 'Address :' },
            { field: 'city', title: 'city :' },
            { field: 'country', title: 'Country' },
        ],
    },
];
