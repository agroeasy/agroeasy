import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import '../home.css';
import Products from './product';



//this is role number-3 for items on anothrlist.js
export default class Row3 extends Component {
	render() {
		return (
              <Container>
                   <Row>
                      <Col md={3}>
                                  <Products title="Lettuses" tag="#750" pix="/images/lettuse.jpg" phone="" quantity=""
                                   email="" location=""
                                  />
                      </Col>
                      <Col md={3}>
                                  <Products title="Pig farm" tag="#5000" pix="/images/pigfarm.jpg" phone="" quantity=""
                                    email="" location=""
                                  />
                     </Col>
                     <Col md={3}>
                                  <Products title="Carrot" tag="#3,500" pix="/images/carrot.jpg" phone="" quantity=""
                                   email="myemail@example.com" location=""
                                  />
                     </Col>
                     <Col md={3}>
                                 <Products title="Poultry" tag="#1,299" pix="/images/poultry.jpg" phone="" quantity=""
                                  email="myemail@example.com" location=""
                                 /> 
                     </Col>
              </Row>
           </Container>
		);
	}
}