import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarToggler, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import { Home, Support, Goods, LOGO, NAVIBAR_STRINGS } from './constants';
import ContactUs from './ContactUs';

const { navBar, mlAuto, navLink } = NAVIBAR_STRINGS;
/*
this is the the navigation bar at the top of the home page
*/
export default class Navibar extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
<<<<<<< HEAD
                <Navbar color="inverse" light expand="md" className = "nav-bar" >
                <NavbarBrand href={Home}><img src='./images/AgroeasyLogo.png' alt="logo"  className="logo"/></NavbarBrand>
=======
                <Navbar color="inverse" light expand="md" className={navBar} >
                    <NavbarBrand href={Home}><img src={LOGO.src} width={LOGO.width} /></NavbarBrand>
>>>>>>> f8056ddac569d10418358f27ec1bccae43f938f7
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className={mlAuto} navbar >
                            <NavItem >
                                <NavLink href={Home} className={navLink}>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink  href={Support} className={navLink}>Support</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href={Goods} className={navLink}>Goods</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={navLink}><ContactUs /></NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink className="navLink" href='./signup'> Signup </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink className="navLink" href='./signin'>Signin</NavLink>
                            </NavItem> 
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
