import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/about';
import Home from './components/home';


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
