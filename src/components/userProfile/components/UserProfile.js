import PropTypes from 'prop-types';
import React from 'react';
import { Layout } from 'antd';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ProfileContent from './ProfileContent';
import SideMenu from './SideMenu';
import { ProducerItems } from '../../producerItems/components';
import { USER_PAGE } from '../constants';
import Auth from '../../auth0/Auth';
import { getUserAuthJwt } from '../actions';

const { Content, Sider } = Layout;
const {
    CLASSNAMES: { BIG_CONTENT, BIG_LAYOUT, SIDER, SM_CONTENT },
} = USER_PAGE;

class UserProfile extends React.Component {

    componentDidMount(){
        const auth = new Auth();
        const { getUserAuthJwt } = this.props.actions;
    
        if(auth.isAuthenticated()) {
            const idToken = auth.getIdToken();
            getUserAuthJwt(idToken);
        }
    }

    render() {
        const { path } = this.props.match;

        return(
            <Content className={BIG_CONTENT}>
                <Layout className={BIG_LAYOUT}>
                    <Sider width={200} className={SIDER}>
                        <SideMenu />
                    </Sider>
                    <Content className={SM_CONTENT}>
                        <Route path={path} exact strict component={ProfileContent} />
                        <Route
                            path={`${path}/items`}
                            component={ProducerItems}
                        />
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

export default connect(null, mapDispatchToProps)(UserProfile);
