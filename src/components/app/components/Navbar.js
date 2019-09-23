import React from 'react';

import Navbar1 from './Navbar1';
import Navbar2 from './Navbar2';

/*
 * this is the the navigation bar at the top of the home page
 */
class Navbar extends React.Component {
    render() {
        return (
            <div>
                <Navbar1 />
                <Navbar2 />
            </div>
        );
    }
}

export default Navbar;
