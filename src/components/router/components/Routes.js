import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import app from '../../app';
import home from '../../home';
import NoMatch from './NoMatch';
import userProfile from '../../userProfile';
import aboutUs from '../../aboutUs';
import addItem from '../../addItem';
import productList  from '../../productList';
import { PATHS } from '../constants';

const { ADD_ITEM, HOME, MARKET, PROFILE, WHO_WE_ARE } = PATHS;
const { App } = app.components;

const Routes = () => (
    <BrowserRouter>
        <App>
            <Switch>
                <Route path={HOME} exact strict component={home.components.Home} />
                <Route path={MARKET} exact strict component={productList.components.ProductList} />
                <Route path={PROFILE} exact strict component={userProfile.components.UserProfile} />
                <Route
                    path={ADD_ITEM}
                    exact
                    strict
                    component={addItem.components.AddItem}
                />
                <Route path={WHO_WE_ARE} exact strict component={aboutUs.components.AboutUs} />
                <Route component={NoMatch} />
            </Switch>
        </App>
    </BrowserRouter>
);

export default Routes;
