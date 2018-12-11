import signUp  from './signup';
import { combineReducers } from 'redux';

export default combineReducers({
    signup: signUp.reducers,
});
