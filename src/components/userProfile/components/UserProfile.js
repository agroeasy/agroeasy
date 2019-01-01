import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

import SideMenu from './SideMenu';
import { USER_PAGE } from '../constants';

const { Content, Sider } = Layout;
const {
    CLASSNAMES: { BIG_CONTENT, BIG_LAYOUT, SIDER, SM_CONTENT },
} = USER_PAGE;

class UserProfile extends React.Component {
    render() {
        const { children } = this.props;

        return(
            <Content className={BIG_CONTENT}>
                <Layout className={BIG_LAYOUT}>
                    <Sider width={200} className={SIDER}>
                        <SideMenu />
                    </Sider>
                    <Content className={SM_CONTENT}>{children}</Content>
                </Layout>
            </Content>
        );
    }
}

UserProfile.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    links: PropTypes.arrayOf(PropTypes.node),
};

export default UserProfile;
