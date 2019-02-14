import { combineReducers } from 'redux';

import app from './app';
import signin from './signin';
import signUp  from './signup';
import contactus from './contactUs';

export default combineReducers({
    app: app.reducers,
    contactus: contactus.reducers,
    signin: signin.reducers,
    signup: signUp.reducers,
});
