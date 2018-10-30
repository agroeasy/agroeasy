import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import Products from './product';
import '../home.css';

//This is the fourth role for anotherlist.js
export default class Rowfour extends Component {
	render () {
		return (
                <Container>
                    <Row>
                        <Col md={3}>
                                   <Products title="Tomatoes" tag="#10,000" pix="/images/tomtoes.jpg" phone="" quantity=""
                                    email="myemail@example.com" location=""
                                   />
                        </Col>
                        <Col md={3}>
                                    <Products title="Bags of beans" tag="#15,000" pix="/images/beans.jpg" phone="" quantity=""
                                     email="" location=""
                                    />
                        </Col>
                        <Col md={3}>
                                   <Products title="Docanut (Ogbono)" tag="#2,000" pix="/images/ogbono.jpg" phone="" quantity=""
                                    email="" location=""
                                   />
                        </Col>
                        <Col md={3}>
                                  <Products title="Ripe banana" tag="#950" pix="/images/ripeBanana.jpg" phone="" quantity=""
                                   email="" location=""
                                  />
                        </Col>
                </Row>
           </Container> 
		);
	}
}
