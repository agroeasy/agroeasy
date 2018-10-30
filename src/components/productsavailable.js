import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import './home.css';
import Spices from './grouped-items/spices';
import FoodItems from './grouped-items/fooditems';
import Livestockpoultry from './grouped-items/livestockpoultry';
import FruitsAndVegetables from './grouped-items/fruitandvegetables';

/*
List of items according to groups
*/
export default class ProductsAvailable extends Component {
       render() {
         return (
                 <Container>
                       <Row>
                            <Col className="items" md={3}>
                                 <FoodItems />
                            </Col>
                            <Col className="items" md={3}>
                                <Livestockpoultry /> 
                            </Col>
                            <Col className="items" md={3}>
                                 <FruitsAndVegetables />
                            </Col>
                            <Col className="items" md={3}>
                                 <Spices />
                            </Col>
                       </Row>
                 </Container>
         );
       }
}
