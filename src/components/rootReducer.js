import { combineReducers } from 'redux';

import signin from './signin';
import signUp  from './signup';

export default combineReducers({
    signin: signin.reducers,
    signup: signUp.reducers,
});
