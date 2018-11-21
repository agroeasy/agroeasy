import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import Products from './Product';
import {  PRODUCT_STRINGS,  ROW_ITEMS_3 } from './constants';

const { center, flex, rowItems } = PRODUCT_STRINGS;
/*this the third on component anotherlist.js */
export default class Row3 extends Component {
    render() {
        return (
            <Row type={flex} justify={center}>
                {
                    ROW_ITEMS_3.map(item =>
                        (<Col span={5} className={rowItems} key={item.name}>
                            <Products
                                title={item.name}
                                pix={item.pix}
                                tag={item.cost}
                                email={item.email}
                                quantity={item.quantity}
                                location={item.location}
                                phone={item.phone}
                            />
                        </Col>)
                    )
                }
            </Row>
        );
    }
}

Row3.PropTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    pix: PropTypes.string,
    tag: PropTypes.string,
};
