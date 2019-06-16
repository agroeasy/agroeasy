import { combineReducers } from 'redux';

import app from './app';
import contactus from './contactUs';
import producerItems from './producerItems';
import signUp from './signup';
import userProfile from './userProfile';

export default combineReducers({
    app: app.reducers,
    contactus: contactus.reducers,
    producerItems: producerItems.reducers,
    signup: signUp.reducers,
    userProfile: userProfile.reducers,
});
