import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import '../home.css';
import Products from './product';

//this the second on component anotherlist.js
export default class Row2 extends Component {
	render() {
		return (
              <Container>
                   <Row>
                      <Col md={3}>
                            <Products title="Abu's farm" tag="#1,350" pix="/images/poultry-chicken.jpg" phone="" quantity=""
                              email="myemail@example.com" location=""
                            />
                      </Col>
                      <Col md={3}>
                            <Products title="Green banana" tag="#500" pix="/images/greenBanana.jpeg" phone="" quantity=""
                              email="" location=""
                            />
                      </Col>
                      <Col md={3}>
                           <Products title="Bags of rice" tag="#15,500" pix="/images/bagsofrice.jpg" phone="" quantity=""
                            email="" location=""
                           />
                    </Col>
                    <Col md={3}>
                           <Products title="Dry pepper" tag="#4,500" pix="/images/Drypepper.jpg" phone="" quantity="" 
                            email="" location=""
                           />
                    </Col>
              </Row>
          </Container>
		);
	}
} 
