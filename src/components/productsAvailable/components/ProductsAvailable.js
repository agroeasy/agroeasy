import React, { Component } from 'react';
import { Col, Row } from 'antd';
import GroupedItems from './GroupedItems';
import { FOODSITEMS, FRUITS_VEGETABLES, LIVESTOCK, SPICES, strings } from './constants';

const { foodItems, fruitsVegetables, items, livestocksPoultry, productsAvailable, spices } = strings;
//List of items according to groups
export default class ProductsAvailable extends Component {
    render() {
        return (
            
            <Row className={productsAvailable}>
                <Col className={items} span={6}>
                    <GroupedItems items={FOODSITEMS} heading={foodItems} />
                </Col>
                <Col className={items} span={6}>
                    <GroupedItems items={LIVESTOCK} heading={livestocksPoultry} />
                </Col>
                <Col className={items} span={6}>
                    <GroupedItems items={FRUITS_VEGETABLES} heading={fruitsVegetables} />
                </Col>
                <Col className={items} span={6}>
                    <GroupedItems items={SPICES} heading={spices} />
                </Col>
            </Row>
            
        );
    }
}
