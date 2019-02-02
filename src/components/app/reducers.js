import { SET_COOKIE, REMOVE_COOKIE } from './actionTypes';

 const initialState = {
    loggedIn: false,
    user: "",
};

 export default ( state = { ...initialState }, action) => {
    switch (action.type) {
    case SET_COOKIE:    {
        const time = 12;
        const expiration = new Date(new Date().getTime()+ time * 3600 * 1000);
        const token = action.data.token || 'testtoken';
        browser.cookies.set(token, expiration);

        return {
            ...state,
            loggedIn: true,
            user: { ...action.data.user },

         };
    }
    case REMOVE_COOKIE: {
        const token = action.data.token || 'testtoken';
        browser.cookies.remove(token);
        return {
            ...state,
            loggedIn: false,
        };
    }
    default:
        return state;
    }
}; 
