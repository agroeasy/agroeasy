import { combineReducers } from 'redux';

import signin from './signin';
import signUp  from './signup';
import contactus from './contactUs';

export default combineReducers({
    contactus: contactus.reducers,
    signin: signin.reducers,
    signup: signUp.reducers,
});
