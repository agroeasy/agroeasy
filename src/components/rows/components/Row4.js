import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import Products from './Product';
import { PRODUCT_STRINGS,  ROW_ITEMS_4 } from './constants';

const { center, flex, rowItems } = PRODUCT_STRINGS;
/*this the fourth on component anotherlist.js */
export default class Row4 extends Component {
    render() {
        return (
            <Row type={flex} justify={center}>
                {
                    ROW_ITEMS_4.map(item =>
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

Row4.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    pix: PropTypes.string,
    tag: PropTypes.string,
};
