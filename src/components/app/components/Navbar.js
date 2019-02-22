import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Avatar, Dropdown, Layout, Menu, message } from 'antd';

import AppLink from './AppLink';
import { getLoginStatus } from '../selectors';
import { removeCookie, resetSigninState } from '../actions';

import signin from '../../signin';
import signup from '../../signup';
import { 
    LOGO, 
    MARKET_TEXT, 
    NAVBAR, 
    PATHS, 
    USER_AVATAR, 
    VALID_SIGNOUT 
} from '../constants';

const { Item } = Menu;
const { Header } = Layout;
const { AVATAR, SHAPE, SIZE, SOURCE } = LOGO;
const { MAIN_NAV, NAV_MENU, NAV_MODE, NAV_THEME } = NAVBAR;
const { HOME, MARKET, PROFILE, SIGN_IN, SIGN_UP } = PATHS;
const { CONTAINER, ICON_TYPE, SIGN_OUT, USER_DROP_DOWN, USER_PROFILE } = USER_AVATAR;

const { Signin } = signin.components;
const { Signup } = signup.components;

const items = [
    <AppLink key={AVATAR} to={HOME}>
        <Avatar className={AVATAR} src={SOURCE} size={SIZE} shape={SHAPE} />
    </AppLink>,
    <AppLink key={MARKET} to={MARKET}>{MARKET_TEXT}</AppLink>,
    <Signin key={SIGN_IN} />,
    <Signup key={SIGN_UP} />,
];

/*
 * this is the the navigation bar at the top of the home page
*/
class Navbar extends React.Component {

    logout = ({ key }) => {
        const { isLoggedIn } = this.props;

        if (isLoggedIn && key === SIGN_OUT) {
            const { removeCookie, resetSigninState } = this.props.actions;

            removeCookie();
            message.info(VALID_SIGNOUT, 5);
            resetSigninState();
        }
    }

    render() {       
        const UserMenu = (
            <Menu onClick={this.logout}>
                <Item key={USER_PROFILE}>
                    <AppLink to={PROFILE} key={PROFILE}>{USER_PROFILE}</AppLink>
                </Item>
                <Item key={SIGN_OUT}>{SIGN_OUT}</Item>
            </Menu>
        );

        return (
            <Header className={MAIN_NAV}>
                <Menu
                    className={NAV_MENU}
                    mode={NAV_MODE}
                    theme={NAV_THEME}
                >
                    {
                        items.map(item => {
                            const { key } = item;
                            const className = key === AVATAR ? CONTAINER : '';

                            return (
                                <Item className={className} key={key}>{item}</Item>
                            );
                        })
                    }

                </Menu>
                <Dropdown overlay={UserMenu} className={USER_DROP_DOWN}>
                    <Avatar icon={ICON_TYPE} />
                </Dropdown>
            </Header>
        );
    }
}

Navbar.propTypes = {
    actions: PropTypes.object,
    isLoggedIn:PropTypes.bool,
    isSignedUp: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.node),
};

const mapStateToProps = state => ({
    isLoggedIn: getLoginStatus(state),
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ removeCookie, resetSigninState }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
