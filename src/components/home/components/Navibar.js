import React from 'react';
import { Collapse, Nav, Navbar, NavbarToggler, NavbarBrand, NavItem, NavLink } from 'reactstrap';

import ContactUs from './ContactUs';
import { GOODS, HOME, LOGO, NAVIBAR, SUPPORT } from './constants';

const { GOODS_TEXT, HOME_TEXT, ML_AUTO, NAV_BAR, NAV_LINK, SUPPORT_TEXT } = NAVIBAR;
const { SOURCE, WIDTH } = LOGO;

/*
 * this is the the navigation bar at the top of the home page
 */
export default class Navibar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    render() {
        return (
            <div>
                <Navbar color="inverse" light expand="md" className={NAV_BAR} >
                    <NavbarBrand href={HOME}><img src={SOURCE} width={WIDTH} /></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className={ML_AUTO} navbar >
                            <NavItem >
                                <NavLink href={HOME} className={NAV_LINK}>{HOME_TEXT}</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink  href={SUPPORT} className={NAV_LINK}>{SUPPORT_TEXT}</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href={GOODS} className={NAV_LINK}>{GOODS_TEXT}</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={NAV_LINK}><ContactUs /></NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
