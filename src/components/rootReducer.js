import { combineReducers } from 'redux';

import signin from './signin';
import signUp  from './signup';
import home from './home';

export default combineReducers({
    home: home.reducers,
    signin: signin.reducers,
    signup: signUp.reducers,
});
