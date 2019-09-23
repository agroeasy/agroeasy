import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Avatar, Dropdown, Layout, Menu } from 'antd';

import AppLink from './AppLink';
import { getLoginStatus } from '../selectors';

import signin from '../../signin';
import signup from '../../signup';
import Auth from '../../../auth0/Auth';
import { HOME_TEXT, LOGO, MARKET_TEXT, NAVBAR, PATHS, USER_AVATAR } from '../constants';

const { Item } = Menu;
const { Header } = Layout;
const { LEFT_NAV_MENU, MAIN_NAV, NAV_MODE, NAV_THEME, RIGHT_NAV_MENU } = NAVBAR;
const { HOME, MARKET, PROFILE, SIGN_IN, SIGN_UP } = PATHS;
const { CONTAINER, ICON_TYPE, SIGN_OUT, USER_DROP_DOWN, USER_PROFILE } = USER_AVATAR;

const { Signin } = signin.components;
const { Signup } = signup.components;

const items = [
    <AppLink key={HOME} to={HOME}>
        {HOME_TEXT}
    </AppLink>,
    <AppLink key={MARKET} to={MARKET}>
        {MARKET_TEXT}
    </AppLink>,
];

/*
 * this is the the navigation bar at the top of the home page
 */
class Navbar1 extends React.Component {
    logout = ({ key }) => {
        const { isLoggedIn } = this.props;

        if (isLoggedIn && key === SIGN_OUT) {
            const auth = new Auth();
            auth.logout();
        }
    };

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
                    {items.map(item => (
                        <Item className={CONTAINER} key={item.key}>
                            {item}
                        </Item>
                    ))}
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
            </Header>
        );
    }
}

Navbar1.propTypes = {
    actions: PropTypes.object,
    isLoggedIn: PropTypes.bool,
    links: PropTypes.arrayOf(PropTypes.node),
    match: PropTypes.object,
};

const mapStateToProps = state => ({
    isLoggedIn: getLoginStatus(state),
});

export default connect(
    mapStateToProps,
    null,
)(Navbar1);
