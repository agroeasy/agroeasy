import React from 'react';
import { Carousel, Layout } from 'antd';

import ProfileContent from './ProfileContent';
import Navibar from '../../home/components/Navibar';
import SideMenu from './SideMenu';
import { USER_PAGE } from './constants';

const { Content, Sider } = Layout;
const { 
    CLASSNAMES: { BIG_CONTENT, BIG_LAYOUT, SIDER, SM_CONTENT },
} = USER_PAGE;

export default class UserProfile extends React.Component {
    render() {
        return(
            <Layout>
                <Navibar />
                <Content className={BIG_CONTENT}>
                    <Layout className={BIG_LAYOUT}>
                        <Sider width={200} className={SIDER}>
                            <SideMenu />
                        </Sider>
                        <Content className={SM_CONTENT}>
                            <ProfileContent /> 
                        </Content>
                    </Layout>
                </Content>
                <Carousel autoplay effect="fade">
                    <div><h3 style={{ textAlign: 'center' }}>one</h3></div>
                    <div><h3 style={{ textAlign: 'center' }}>two</h3></div>
                    <div><h3 style={{ textAlign: 'center' }}>three</h3></div>
                    <div><h3 style={{ textAlign: 'center' }}>four</h3></div>
                </Carousel>
            </Layout>
        );
    }
}
