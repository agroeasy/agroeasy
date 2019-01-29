import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

import home from '../../home';
import Footer from './Footer';
import Navbar from './Navbar';

const { ContactUs } = home.components;
const { Content } = Layout;

class App extends React.Component {
    render() {
        const { children } = this.props;

        return (
            <Layout>
                <Navbar />
                <Content>{children}</Content>
                <Footer />
                <ContactUs />
            </Layout>
        );
    }
}

App.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    links: PropTypes.arrayOf(PropTypes.node),
};

export default App;
