import React, { Component } from 'react';
import { Navbar, NavbarToggler, NavbarBrand,
       Nav, NavItem, NavLink, Collapse } from 'reactstrap';
import { Home, Support, Contact, Goods } from './constant';
import './home.css';


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
                <Navbar color="inverse" light expand="md" className = "nav-bar" >
                    <NavbarBrand href={Home}>Our simple <br />logo here</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar >
                            <NavItem >
                            <NavLink href={Home} className="navLink">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink  href={Support} className="navLink">Support</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href={Goods} className="navLink">Goods</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href={Contact} className="navLink">Contact</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                </div>
                );
            }
        }
