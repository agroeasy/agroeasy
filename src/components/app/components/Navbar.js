import PropTypes from 'prop-types';
import React from 'react';

import { connect } from 'react-redux';
import { Avatar, Dropdown, Layout, Menu } from 'antd';

import AppLink from './AppLink';

import { setCartCount } from '../actions';
import { getLoginStatus, getCartCount } from '../selectors';

import signin from '../../signin';
import signup from '../../signup';
import Auth from '../../../auth0/Auth';
import cart from '../../cart';
import { LOGO, NAVBAR_STRINGS, NAVBAR_STYLE, PATHS, USER_AVATAR } from '../constants';

const { Item } = Menu;
const { Header } = Layout;
const { AVATAR, SHAPE, SIZE, SOURCE } = LOGO;
const { BADGE, CART_ICON, TRANSPARENT, MARKET_TEXT } = NAVBAR_STRINGS;
const { LEFT_NAV_MENU, MAIN_NAV, NAV_MODE, NAV_THEME, RIGHT_NAV_MENU } = NAVBAR_STYLE;
const { CART, HOME, MARKET, PROFILE, SIGN_IN, SIGN_UP } = PATHS;
const { CONTAINER, ICON_TYPE, SIGN_OUT, USER_DROP_DOWN, USER_PROFILE } = USER_AVATAR;

const { Signin } = signin.components;
const { Signup } = signup.components;
const { CartBadgeIcon } = cart.components;

const items = [
    <AppLink key={AVATAR} to={HOME}>
        <Avatar className={AVATAR} src={SOURCE} size={SIZE} shape={SHAPE} />
    </AppLink>,
    <AppLink key={MARKET} to={MARKET}>
        {MARKET_TEXT}
    </AppLink>,
];

/*
 * this is the the navigation bar at the top of the home page
 */
class Navbar extends React.Component {
    logout = ({ key }) => {
        const { isLoggedIn } = this.props;

        if (isLoggedIn && key === SIGN_OUT) {
            const auth = new Auth();
            auth.logout();
        }
    };

    // componentDidUpdate() {

    // }
    // componentDidMount() {
    //     setInterval(() => {
    //         const newCount = Number(JSON.parse(window.localStorage.getItem(CART)).length || 0);
    //         this.props.setCartCount(newCount);
    //     }, 100);
    // }

    render() {
        const UserMenu = (
            <Menu onClick={this.logout}>
                <Item key={USER_PROFILE}>
                    <AppLink to={PROFILE} key={PROFILE}>
                        {USER_PROFILE}
                    </AppLink>
                </Item>
                <Item key={SIGN_OUT}>
                    <AppLink to={HOME} key={SIGN_OUT}>
                        {SIGN_OUT}
                    </AppLink>
                </Item>
            </Menu>
        );
        const { isLoggedIn } = this.props;

        return (
            <Header className={MAIN_NAV}>
                <Menu
                    className={RIGHT_NAV_MENU}
                    mode={NAV_MODE}
                    theme={NAV_THEME}
                    selectedKeys={[location.pathname]}
                >
                    {items.map(item => {
                        const { key } = item;
                        const className = key === AVATAR ? CONTAINER : '';

                        return (
                            <Item className={className} key={key}>
                                {item}
                            </Item>
                        );
                    })}
                </Menu>
                {isLoggedIn ? (
                    <Dropdown overlay={UserMenu} className={USER_DROP_DOWN}>
                        <Avatar icon={ICON_TYPE} />
                    </Dropdown>
                ) : (
                    <Menu
                        className={LEFT_NAV_MENU}
                        mode={NAV_MODE}
                        theme={NAV_THEME}
                        selectedKeys={[location.pathname]}
                    >
                        <Item key={SIGN_IN}>
                            <Signin />
                        </Item>
                        <Item key={SIGN_UP}>
                            <Signup />
                        </Item>
                    </Menu>
                )}
                <Menu
                    className={`${LEFT_NAV_MENU} cart-count-nav`}
                    mode={NAV_MODE}
                    theme={NAV_THEME}
                >
                    <Item key={BADGE} className={TRANSPARENT}>
                        <AppLink to={CART} className={CART_ICON}>
                            <CartBadgeIcon count={0} />
                        </AppLink>
                    </Item>
                </Menu>
            </Header>
        );
    }
}

Navbar.propTypes = {
    actions: PropTypes.object,
    cartCount: PropTypes.number,
    isLoggedIn: PropTypes.bool,
    links: PropTypes.arrayOf(PropTypes.node),
    match: PropTypes.object,
};

const mapStateToProps = state => ({
    cartCount: getCartCount(state),
    isLoggedIn: getLoginStatus(state),
});

export default connect(
    mapStateToProps,
    { setCartCount },
)(Navbar);
