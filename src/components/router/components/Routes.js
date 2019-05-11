import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import aboutUs from '../../aboutUs';
import app from '../../app';
import home from '../../home';
import NoMatch from './NoMatch';
import productList  from '../../productList';
import userProfile from '../../userProfile';
import history from '../../history/History';
import { PATHS } from '../constants';

const { ABOUT, HOME, MARKET, PROFILE } = PATHS;
const { App } = app.components;

// const handleAuthentication = (nextState, replace) => {
//     if (/access_token|id_token|error/.test(nextState.location.hash)) {
//         auth.handleAuthentication();
//     }
// };

const Routes = () => (
    <Router history={history}>
        <App>
            <Switch>
                <Route path={HOME} exact strict component={home.components.Home} />
                <Route path={MARKET} exact strict component={productList.components.ProductList} />
                <Route path={PROFILE} component={userProfile.components.UserProfile} />
                <Route path={ABOUT} exact strict component={aboutUs.components.AboutUs} />
                <Route component={NoMatch} />
            </Switch>
        </App>
    </Router>
);

export default Routes;
