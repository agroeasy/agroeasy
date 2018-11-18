import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Layout } from 'antd';
import { FOOTER_STRINGS } from './constants';
import ProductsAvailable from './productsAvailable/ProductsAvailable';

const { lowerFooter, footer, footerContent, footerText, flex, center } = FOOTER_STRINGS;
const { Footer, Content } = Layout;
//This contains the productsavailable component
class  Foot extends Component {
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

Foot.PropTypes = {
    className: PropTypes.string,
};

export default Foot;
