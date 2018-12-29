import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import app from '../../app';
import home from '../../home';
import NoMatch from './NoMatch';
import userProfile from '../../userProfile';
import producerDataPage from '../../producerDataPage';
import { PATHS } from '../constants';

const { HOME, MARKET, PROFILE, PRODUCER_DATA_PAGE } = PATHS;
const { App } = app.components;

const Routes = () => (
    <BrowserRouter>
        <App>
            <Switch>
                <Route path={HOME} exact strict component={home.components.Home} />
                <Route path={MARKET} exact strict component={home.components.Home} />
                <Route path={PROFILE} exact strict component={userProfile.components.UserProfile} />
                <Route
                    path={PRODUCER_DATA_PAGE}
                    exact
                    strict
                    component={producerDataPage.components.AddItem} 
                />
                <Route component={NoMatch} />
            </Switch>
        </App>
    </BrowserRouter>
);

export default Routes;
