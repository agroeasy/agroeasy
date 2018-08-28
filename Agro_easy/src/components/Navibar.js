import React, { Component } from 'react';
import { Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Collapse } from 'reactstrap';
import './home.css'
import { Home, Support, Contact, Goods } from './constant';


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
                    <NavbarBrand href="/">Our simple <br />logo here</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar >
                            <NavItem >
                            <NavLink href="/" className="navLink">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink /* href="/support/" */className="navLink">Support</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink /* href="/show-goods/" */className="navLink">Goods</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink /* href="/contact-us/" */ className="navLink">Contact</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                </div>
                );
            }
        }
