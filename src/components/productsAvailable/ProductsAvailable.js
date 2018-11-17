import React, { Component } from 'react';
import { Col, Row } from 'antd';
import GroupedItems from './GroupedItems';
import { FOODSITEMS, LIVESTOCK, FRUITS_VEGETABLES, SPICES } from './constants';

//List of items according to groups
export default class ProductsAvailable extends Component {
    render() {
        return (
            
            <Row className="productsAvailable">
                <Col className="items" span={6}>
                    <GroupedItems items={FOODSITEMS} heading="Food Items" />
                </Col>
                <Col className="items" span={6}>
                    <GroupedItems items={LIVESTOCK} heading="livestock & Poultry" />
                </Col>
                <Col className="items" span={6}>
                    <GroupedItems items={FRUITS_VEGETABLES} heading="Fruits & Vegetables" />
                </Col>
                <Col className="items" span={6}>
                    <GroupedItems items={SPICES} heading="Spices" />
                </Col>
            </Row>
            
        );
    }
}
