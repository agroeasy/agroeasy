import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import Products from './Product';
import { ROW_ITEMS_1, PRODUCT_STRINGS } from './constants';

const { rowItem , flex, center } = PRODUCT_STRINGS;
/*this the first on component anotherlist.js */
class Row1 extends Component {
    render() {
        return (
            <Row type={flex} justify={center} >
                {
                    ROW_ITEMS_1.map(item =>
                        <Col span={5} key={item.name} className={rowItem}>
                            <Products
                                title={item.name}
                                pix={item.pix}
                                tag={item.cost}
                            />
                        </Col>
                    )
                }
            </Row>
        );
    }
}

Row1.PropTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    pix: PropTypes.string,
    tag: PropTypes.string,
};
export default Row1;
