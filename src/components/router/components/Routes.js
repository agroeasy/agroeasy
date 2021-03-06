import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import aboutUs from '../../aboutUs';
import market from '../../market';
import app from '../../app';
import home from '../../home';
import NoMatch from './NoMatch';
import learnMore from '../../learnMore';
import userProfile from '../../userProfile';
import history from '../../history/History';
import { PATHS } from '../constants';
import Callback from '../../../auth0/Callback';
import ScrollToTop from './ScrollToTop';

const { CALLBACK, ABOUT, HOME, MARKET, PROFILE, MORE } = PATHS;
const { App } = app.components;

const Routes = () => (
    <Router history={history}>
        <ScrollToTop>
            <App>
                <Switch>
                    <Route path={HOME} exact strict component={home.components.Home} />
                    <Route path={MARKET} exact strict component={market.components.MarketList} />
                    <Route path={PROFILE} component={userProfile.components.UserProfile} />
                    <Route path={ABOUT} exact strict component={aboutUs.components.AboutUs} />
                    <Route path={CALLBACK} exact strict component={Callback} />
                    <Route path={MORE} exact strict component={learnMore.components.LearnMore} />
                    <Route component={NoMatch} />
                </Switch>
            </App>
        </ScrollToTop>
    </Router>
);

export default Routes;
