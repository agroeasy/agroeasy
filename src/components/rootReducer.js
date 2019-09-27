import { combineReducers } from 'redux';

import app from './app';
import cart from './cart';
import contactus from './contactUs';
import producerItems from './producerItems';
import home from './home';
import signUp from './signup';

export default combineReducers({
    app: app.reducers,
    cart: cart.reducers,
    contactus: contactus.reducers,
    home: home.reducers,
    producerItems: producerItems.reducers,
    signup: signUp.reducers,
});
