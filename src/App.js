import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/support';
<<<<<<< HEAD
import Home from './components/home';
import  Signup from './components/signup/signup';
import  Signin from './components/signin/signin';
/*
The principal component for housing sub-components (like home, about and
=======
import Home from './components/Home';
import './components/home.css';

/*The principal component for housing sub-components (like home, about and
>>>>>>> f8056ddac569d10418358f27ec1bccae43f938f7
other pages) for easy navigation
*/
class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
<<<<<<< HEAD
                   <Route path='/' exact strict component={Home} />
                   <Route path='/about/' exact strict component={About} />
                   <Route path="/Signup/" component={Signup} />
                   <Route path="/Signin/" component={Signin} />
=======
                    <Route path='/' exact strict component={Home} />
                    <Route path='/about/' exact strict component={About} />
>>>>>>> f8056ddac569d10418358f27ec1bccae43f938f7
                </div>
            </Router>
        );
    }
}

export default App;
