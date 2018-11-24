import React, { Component } from 'react';
import { Col, Row } from 'antd';
import GroupedItems from './GroupedItems';
import { FOODSITEMS, FRUITS_VEGETABLES, LIVESTOCK, SPICES, PRODUCTS_AVAILABLE } from './constants';

const {
    AVAILABLE,
    FOOD_ITEM_TEXT,
    FRUITS_TEXT, ITEMS,
    LIVE_STOCK_TEXT,
    SPICES_TEXT,
} = PRODUCTS_AVAILABLE;

//List of items according to groups
export default class ProductsAvailable extends Component {
    render() {
        return (

            <Row className={AVAILABLE}>
                <Col className={ITEMS} span={6}>
                    <GroupedItems items={FOODSITEMS} heading={FOOD_ITEM_TEXT} />
                </Col>
                <Col className={ITEMS} span={6}>
                    <GroupedItems items={LIVESTOCK} heading={LIVE_STOCK_TEXT} />
                </Col>
                <Col className={ITEMS} span={6}>
                    <GroupedItems items={FRUITS_VEGETABLES} heading={FRUITS_TEXT} />
                </Col>
                <Col className={ITEMS} span={6}>
                    <GroupedItems items={SPICES} heading={SPICES_TEXT} />
                </Col>
            </Row>

        );
    }
}
