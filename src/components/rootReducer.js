import { combineReducers } from 'redux';

import app from './app';
import contactus from './contactUs';
import producerItems from './producerItems';
import signin from './signin';
import signUp  from './signup';
import userprofile from './userProfile';

export default combineReducers({
    app: app.reducers,
    contactus: contactus.reducers,
    producerItems: producerItems.reducers,
    signin: signin.reducers,
    signup: signUp.reducers,
    userprofile: userprofile.reducers,
});
