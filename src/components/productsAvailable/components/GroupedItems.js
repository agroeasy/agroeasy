import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import { PRODUCTS_AVAILABLE } from '../constants';

const { GROUPED_ITEMS, LIST } = PRODUCTS_AVAILABLE;

//This component encapsulates items on productsavailable.js
class GroupedItems extends React.Component {
    render() {
        const items = this.props.items.map(item =>
            (<li key={item.name} className={LIST}> {item.name}</li>));

        return (
            <Row>
                <Col className={GROUPED_ITEMS} span={12} offset={6}>
                    <ul>
                        <h6>{this.props.heading}</h6>
                        {items}
                    </ul>
                </Col>
            </Row>
        );
    }
}

GroupedItems.propTypes = {
    heading: PropTypes.string,
    items: PropTypes.array,
};

export default GroupedItems;
