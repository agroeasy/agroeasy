import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import GroupedItems from './GroupedItems';
import { FOODSITEMS, LIVESTOCK, FRUITS_VEGETABLES, SPICES } from './constants';

//List of items according to groups
export default class ProductsAvailable extends Component {
    render() {
        return (
            <Container className="productsAvailable">
                <Row>
                    <Col className="items" md={3}>
                        <GroupedItems items={FOODSITEMS} heading="Food Items" />
                    </Col>
                    <Col className="items" md={3}>
                        <GroupedItems items={LIVESTOCK} heading="livestock & Poultry" />
                    </Col>
                    <Col className="items" md={3}>
                        <GroupedItems items={FRUITS_VEGETABLES} heading="Fruits & Vegetables" />
                    </Col>
                    <Col className="items" md={3}>
                        <GroupedItems items={SPICES} heading="Spices" />
                    </Col>
                </Row>
            </Container>
        );
    }
}
