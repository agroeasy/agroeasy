import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import ProductsAvailable from './productsAvailable/ProductsAvailable';
import { FOOTER_STRINGS } from './constants';

const { lowerFooter, footer, footerContent, footerText } = FOOTER_STRINGS;
/*
This will contain the productsavailable components and other
neccessary info
*/
class  Foot extends Component {
    render () {
        return (
            <div className={footer}>
                <ProductsAvailable />
                <div className={lowerFooter}>
                    <Row>
                        <Col>
                            <h6 className={footerContent}>
                                {footerText}
                            </h6>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

Foot.PropTypes = {
    className: PropTypes.string,
};

export default Foot;