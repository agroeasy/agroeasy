import React from 'react';
import { Layout } from 'antd';

import ProfileContent from './ProfileContent';
import Navibar from '../../home/components/Navibar';
import SideMenu from './SideMenu';
import Counter from '../../redux/Counter';
import Practice from '../../redux/Practice';
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
                            <Counter />
                            <Practice /> 
                        </Content>
                    </Layout>
                </Content>
            </Layout>
        );
    }
}
