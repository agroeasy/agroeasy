import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Footer2 from './footer2';
import contactus from '../../contactUs';
import { setLoginStatus } from '../actions';
import { bindActionCreators } from 'redux';
import Footer from './Footer';
import Banner from './banner';
import Navbar from './Navbar';

const { ContactUs } = contactus.components;
const { Content } = Layout;

class App extends React.Component {
    componentDidMount() {
        const { setLoginStatus } = this.props.actions;
        setLoginStatus();
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
    auth: PropTypes.object,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    links: PropTypes.arrayOf(PropTypes.node),
    match: PropTypes.object,
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ setLoginStatus }, dispatch),
});

export default withRouter(connect(null, mapDispatchToProps)(App));
