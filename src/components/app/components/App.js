import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Layout, message } from 'antd';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import Footer2 from './footer2';

import contactus from '../../contactUs';
import Footer from './Footer';
import Banner from './banner';
import Navbar from './Navbar';
import { getLoginStatus, getUserData } from '../selectors';
import { SIGNIN_SUCCESS } from '../constants';
import { resetStatusStatus } from '../actions';

const { ContactUs } = contactus.components;
const { Content } = Layout;

class App extends React.Component {
    componentDidUpdate() {
        const {
            isLoggedIn,
            user,
            status,
            actions: { resetStatusStatus },
        } = this.props;

        if (isLoggedIn && status) {
            message.success(`${SIGNIN_SUCCESS} ${user.firstName}`) && resetStatusStatus();
        }
    }

    render() {
        const { children } = this.props;

        return (
            <Layout>
                <Navbar />
                <Content>{children}</Content>
                <Banner />
                <Footer />
                <Footer2 />
                <ContactUs />
            </Layout>
        );
    }
}

App.propTypes = {
    actions: PropTypes.object,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    isLoggedIn: PropTypes.bool,
    links: PropTypes.arrayOf(PropTypes.node),
    match: PropTypes.object,
    status: PropTypes.string,
    user: PropTypes.object,
};

const mapStateToProps = state => ({
    isLoggedIn: getLoginStatus(state),
    status: state.app.status,
    user: getUserData(state),
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ resetStatusStatus }, dispatch),
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(App),
);
