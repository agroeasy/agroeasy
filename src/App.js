import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/support';
import Home from './components/Home';
import './components/home.css';
import  Signup from './components/signup/signup';
import  Signin from './components/signin/signin';

/*The principal component for housing sub-components (like home, about and
other pages) for easy navigation
*/
class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Route path='/' exact strict component={Home} />
                    <Route path='/about/' exact strict component={About} />
                    <Route path="/Signup/" component={Signup} />
                    <Route path="/Signin/" component={Signin} />
                </div>
            </Router>
        );
    }
}

export default App;
