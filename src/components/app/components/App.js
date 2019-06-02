import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import { withRouter } from 'react-router-dom';
import Footer2 from './footer2';

import contactus from '../../contactUs';
import Footer from './Footer';
import Banner from './banner';
import Navbar from './Navbar';
import { getUserData } from '../selectors';

const { ContactUs } = contactus.components;
const { Content } = Layout;

class App extends React.Component {

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

const mapStateToProps = state => ({
    auth: state.app.auth,
    status: state.app.status,
    user: getUserData(state),
});

export default withRouter(connect(mapStateToProps, null)(App));
