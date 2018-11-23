import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Layout, Row } from 'antd';
import { FOOTER_STRINGS } from './constants';
import { components } from '../../productsAvailable';

const { ProductsAvailable } = components;
const { center, footer, footerContent, footerText, flex, lowerFooter } = FOOTER_STRINGS;
const { Content, Footer } = Layout;
//This contains the productsavailable component
class  AppFoot extends Component {
    render () {
        return (
            <Layout>
                <Content className={footer} >
                    <ProductsAvailable />
                </Content>
                <Footer className={lowerFooter}>
                    <Row type={flex} justify={center}>
                        <Col span={8}>
                            <h6 className={footerContent}>
                                {footerText}
                            </h6>
                        </Col>
                    </Row>
                </Footer>
            </Layout>
        );
    }
}

AppFoot.propTypes = {
    className: PropTypes.string,
};

export default AppFoot;
