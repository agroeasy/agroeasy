import React, { Component } from 'react';
import { Navbar, NavbarToggler, NavbarBrand,
       Nav, NavItem, NavLink, Collapse } from 'reactstrap';
import { Home, Support, Goods, LOGO, NAVIBAR_STRINGS } from './constants';
import ContactUs from './ContactUs';


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
                <Navbar color="inverse" light expand="md" className = {NAVIBAR_STRINGS.navBar} >
                    <NavbarBrand href={Home}><img src={LOGO.src} width={LOGO.width} /></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className={NAVIBAR_STRINGS.mlAuto} navbar >
                            <NavItem >
                               <NavLink href={Home} className={NAVIBAR_STRINGS.navLink}>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink  href={Support} className={NAVIBAR_STRINGS.navLink}>Support</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href={Goods} className={NAVIBAR_STRINGS.navLink}>Goods</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={NAVIBAR_STRINGS.navLink}><ContactUs /></NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                </div>
                );
            }
        }