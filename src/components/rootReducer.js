import { combineReducers } from 'redux';

import app from './app';
import contactus from './contactUs';
import producerItems from './producerItems';
import signin from './signin';
import signUp from './signup';

export default combineReducers({
    app: app.reducers,
    contactus: contactus.reducers,
    producerItems: producerItems.reducers,
    signin: signin.reducers,
    signup: signUp.reducers
});
