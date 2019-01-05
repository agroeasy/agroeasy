import React from 'react';
import { Layout } from 'antd';

import ProfileContent from './ProfileContent';
import SideMenu from './SideMenu';
import { USER_PAGE } from '../constants';

const { Content, Sider } = Layout;
const {
    CLASSNAMES: { BIG_CONTENT, BIG_LAYOUT, SIDER, SM_CONTENT },
} = USER_PAGE;

class UserProfile extends React.Component {
    render() {
        return(
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
        );
    }
}

export default UserProfile;
