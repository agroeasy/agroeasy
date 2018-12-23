import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar,  Dropdown, Layout, Menu } from 'antd';

import ContactUs from './ContactUs';
import signin from '../../signin/';
import signup from '../../signup/';
import { HOME, LOGO, NAVBAR, USER_AVATAR, PROFILE } from './constants';

const {
    MAIN_NAV,
    MARKET_TEXT,
    NAV_MENU,
    NAV_MODE,
    NAV_THEME,
} = NAVBAR;
const { AVATAR, SHAPE, SIZE, SOURCE } = LOGO;
const { CONTAINER, ICON_TYPE, SIGN_OUT, USER_DROP_DOWN, USER_PROFILE } = USER_AVATAR;
const { Header } = Layout;
const { Signin } = signin.components;
const { Signup } = signup.components;

const UserMenu = (
    <Menu>
        <Menu.Item key={USER_PROFILE}>
            <Link to={PROFILE}>{USER_PROFILE}</Link>
        </Menu.Item>
        <Menu.Item key={SIGN_OUT}>{SIGN_OUT}</Menu.Item>
    </Menu>
);
/*
 * this is the the navigation bar at the top of the home page
 */
export default class Navibar extends React.Component {
    render() {
        return (
            <Header className={MAIN_NAV}>
                <Menu theme={NAV_THEME} mode={NAV_MODE} className={NAV_MENU} >
                    <Menu.Item className={CONTAINER}>
                        <Link to={HOME}>
                            <Avatar
                                className={AVATAR}
                                src={SOURCE}
                                size={SIZE}
                                shape={SHAPE}
                            />
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to={HOME}>{MARKET_TEXT}</Link>
                    </Menu.Item>
                    <Menu.Item><Signin /></Menu.Item>
                    <Menu.Item><Signup /></Menu.Item>
                    <Menu.Item><ContactUs /></Menu.Item>
                </Menu>
                <Dropdown overlay={UserMenu} className={USER_DROP_DOWN}>
                    <Avatar icon={ICON_TYPE} />
                </Dropdown>
            </Header>
        );
    }
}
