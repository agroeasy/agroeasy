import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/Support';
import Home from './components/Home';
import './components/Home.css';
import './components/productsAvailable/Styles.css';
import './components/rows/RowStyle.css';

/*The Top-most component for housing sub-components (like home, about and
other pages) for easy navigation
*/
class App extends Component {
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

export default App;
