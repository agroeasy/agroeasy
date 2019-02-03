import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import app from '../../app';
import home from '../../home';
import NoMatch from './NoMatch';
import userProfile from '../../userProfile';
import aboutUs from '../../aboutUs';
import { PATHS } from '../constants';

const { ABOUT, HOME, MARKET, PROFILE } = PATHS;
const { App } = app.components;

const Routes = () => (
    <BrowserRouter>
        <App>
            <Switch>
                <Route path={HOME} exact strict component={home.components.Home} />
                <Route path={MARKET} exact strict component={home.components.Home} />
                <Route path={PROFILE} component={userProfile.components.UserProfile} />
                <Route path={ABOUT} exact strict component={aboutUs.components.AboutUs} />
                <Route component={NoMatch} />
            </Switch>
        </App>
    </BrowserRouter>
);

export default Routes;
