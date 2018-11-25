import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { components as SupportComponents } from './components/support';
import { components as HomeComponents } from './components/home';

const { Home } = HomeComponents;
const { Support: About } = SupportComponents;

/*
 * The Top-most component for housing sub-components (like home, about and
 * other pages) for easy navigation
 */
export default class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Route path='/' exact strict component={Home} />
                    <Route path='/about/' exact strict component={About} />
                </div>
            </Router>
        );
    }
}
