import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import Products from './Product';
import {  PRODUCT_STRINGS, ROW_ITEMS_2 } from './constants';

const { center, flex, rowItems } = PRODUCT_STRINGS;
/*this the second on component anotherlist.js */
class Row2 extends Component {
    render() {
        return (
            <Row type={flex} justify={center}>
                {
                    ROW_ITEMS_2.map(item =>
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

Row2.PropTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    pix: PropTypes.string,
    tag: PropTypes.string,
};

export default Row2;
