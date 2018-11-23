import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import Products from './Product';
import { PRODUCT,  ROW_ITEMS_1 } from './constants';

const { STYLES: { CENTER, FLEX }, CLASSNAMES: { ROW_ITEMS } } = PRODUCT;

/*this the first on component anotherlist.js */
class Row1 extends Component {
    render() {
        return (
            <Row type={FLEX} justify={CENTER} >
                {
                    ROW_ITEMS_1.map(item =>
                        (<Col span={5} key={item.name} className={ROW_ITEMS}>
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

Row1.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    pix: PropTypes.string,
    tag: PropTypes.string,
};
export default Row1;
