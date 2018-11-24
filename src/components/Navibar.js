import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarToggler, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import { Goods, Home, LOGO, NAVIBAR_STRINGS, Support } from './constants';
import ContactUs from './ContactUs';
import Signin from './signin/components/Signin';
import Signup from './signup/components/Signup';

const { goods, home, mlAuto, navBar, navLink, support } = NAVIBAR_STRINGS;
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
                <Navbar color="inverse" light expand="md" className={navBar} >
                    <NavbarBrand href={Home}><img src={LOGO.src} width={LOGO.width} /></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className={mlAuto} navbar >
                            <NavItem >
                                <NavLink href={Home} className={navLink}>{home}</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink  href={Support} className={navLink}>{support}</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href={Goods} className={navLink}>{goods}</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={navLink}><ContactUs /></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={navLink}><Signin /></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={navLink}><Signup /></NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
