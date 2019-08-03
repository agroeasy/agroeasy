import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import aboutUs from '../../aboutUs';
import app from '../../app';
import home from '../../home';
import NoMatch from './NoMatch';
import productList from '../../productList';
import checkout from '../../checkout';
import userProfile from '../../userProfile';
import history from '../../history/History';
import { PATHS } from '../constants';
import Callback from '../../../auth0/Callback';
import ScrollToTop from './ScrollToTop';

const { CALLBACK, ABOUT, HOME, MARKET, PROFILE, CHECKOUT } = PATHS;
const { App } = app.components;

const Routes = () => (
    <Router history={history}>
<<<<<<< HEAD
        <ScrollToTop>
            <App>
                <Switch>
                    <Route path={HOME} exact strict component={home.components.Home} />
                    <Route
                        path={MARKET}
                        exact
                        strict
                        component={productList.components.ProductList}
                    />
                    <Route path={PROFILE} component={userProfile.components.UserProfile} />
                    <Route path={ABOUT} exact strict component={aboutUs.components.AboutUs} />
                    <Route path={CALLBACK} exact strict component={Callback} />
                    <Route component={NoMatch} />
                </Switch>
            </App>
        </ScrollToTop>
=======
        <App>
            <Switch>
                <Route path={HOME} exact strict component={home.components.Home} />
                <Route path={MARKET} exact strict component={productList.components.ProductList} />
                <Route path={PROFILE} component={userProfile.components.UserProfile} />
                <Route path={ABOUT} exact strict component={aboutUs.components.AboutUs} />
                <Route path={CHECKOUT} exact strict component={checkout.components.Checkout} />
                <Route path={CALLBACK} exact strict component={Callback} />
                <Route component={NoMatch} />
            </Switch>
        </App>
>>>>>>> bc457bf8b0762a79ad214096a5529125c6431c3f
    </Router>
);

export default Routes;
