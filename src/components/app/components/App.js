import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

import Footer from './Footer';
import Navbar from './Navbar';

const { Content } = Layout;

class App extends React.Component {
    render() {
        const { children } = this.props;

        return (
            <Layout className="app-main-container" >
                <Navbar />
                <Content className="app-content-container">
                    {children}
                </Content>
                <Footer />
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
