import PropTypes from 'prop-types';
import React from 'react';
import { Icon, Layout, Tooltip } from 'antd';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ProfileContent from './ProfileContent';
import SideMenu from './SideMenu';
import { ProducerItems } from '../../producerItems/components';
import { USER_PAGE } from '../constants';
import Auth from '../../../auth0';
import { getUserAuthJwt } from '../actions';

const { Header, Content, Sider } = Layout;
const {
    CLASSNAMES: { BIG_CONTENT, BIG_LAYOUT, SIDER, SM_CONTENT },
    STRINGS: { BOTTOM_LEFT, CLOSE, MENU_FOLD, MENU_UNFOLD, OPEN }
} = USER_PAGE;

class UserProfile extends React.Component {
    state = {
        collapsed: false,
    };
    
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    componentDidMount() {
        const auth = new Auth();
        const { getUserAuthJwt } = this.props.actions;

        if (auth.isAuthenticated()) {
            const tokens = auth.getTokens();
            getUserAuthJwt(tokens);
        }
    }

    render() {
        const { path } = this.props.match;
        const { collapsed } = this.state;

        return (
            <Content className={BIG_CONTENT}>
                <Layout className={BIG_LAYOUT}>
                    <Sider 
                        width={200} 
                        className={SIDER} 
                        trigger={null} 
                        collapsible 
                        collapsed={collapsed} 
                        collapsedWidth='0'
                    >
                        <SideMenu 
                            collapsed={collapsed}
                            toggle={this.toggle}
                        />
                    </Sider>
                    <Header className="collapse-sidebar">
                        <Tooltip placement={BOTTOM_LEFT} title={collapsed ? OPEN : CLOSE}>
                            <Icon
                                type={collapsed ? MENU_UNFOLD : MENU_FOLD}
                                onClick={this.toggle}
                            />
                        </Tooltip>
                    </Header>
                    <Content className={SM_CONTENT}>
                        <Route path={path} exact strict component={ProfileContent} />
                        <Route path={`${path}/items`} component={ProducerItems} />
                    </Content>
                </Layout>
            </Content>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ getUserAuthJwt }, dispatch),
});

UserProfile.propTypes = {
    actions: PropTypes.object,
    match: PropTypes.object,
};

export default connect(
    null,
    mapDispatchToProps,
)(UserProfile);
