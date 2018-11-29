import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import ContactUs from './ContactUs';
import { GOODS, HOME, LOGO, NAVIBAR, SUPPORT } from './constants';

const { GOODS_TEXT, HOME_TEXT, FLOAT_NAV, NAV_LINK, NAV_MODE, NAV_THEME, SUPPORT_TEXT } = NAVIBAR;
const { SOURCE, WIDTH } = LOGO;
const { Header } = Layout;

/*
 * this is the the navigation bar at the top of the home page
 */

export default class Navibar extends React.Component {
    render() {
        return (
            <Layout>
                <Header >
                    <div><Link to={HOME}><img src={SOURCE} width={WIDTH} /></Link>
                        <Menu theme={NAV_THEME} mode={NAV_MODE} className={FLOAT_NAV} >
                            <Menu.Item>
                                <Link to={HOME} className={NAV_LINK}>{HOME_TEXT}</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to={SUPPORT} className={NAV_LINK}>{SUPPORT_TEXT}</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to={GOODS} className={NAV_LINK}>{GOODS_TEXT}</Link>
                            </Menu.Item>
                            <Menu.Item className={NAV_LINK}><ContactUs /></Menu.Item>
                        </Menu>
                    </div>
                </Header>
            </Layout>
        );
    }
} 
