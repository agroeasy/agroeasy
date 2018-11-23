import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/Support';
import Home from './components/Home';
import './components/styles.css';
import './components/productsAvailable/components/styles.css';
import './components/rows/components/styles.css';

/*The Top-most component for housing sub-components (like home, about and
other pages) for easy navigation
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
