import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import '../home.css';
import Products from './product';



/*this the first on component anotherlist.js */
export default class Row1 extends Component {
	render() {
		return (
            <Container fluid>
                  <Row style={{display: 'inlineblock'}}>
                      <Col md={3}>
                             <Products title="Crates of eggs" pix={"/images/egg-crates.jpeg"} tag="#1,200" phone="" quantity=""
                              email="myemail@example.com" location="Gawu Babangida, Gurara, Niger State"
                             />
                      </Col>
                     <Col md={3}>
                            <Products  title="Palm oil" pix={ '/images/PalmOil.jpg'} tag="#10,000" phone="" quantity=""
                             location="" email=""
                            />
                     </Col>
                     <Col md={3}>
                           <Products title="Onion Bags" tag="#11,500" pix={"/images/onion-bags.jpg"} phone="" quantity=""
                            email="myemail@example.com" location=""
                           />
                     </Col>
                     <Col md={3}>
                           <Products title="Heritage Oil" pix={"/images/GroundnutOil.jpeg"} tag="#1,500" phone="" quantity=""
                            email="myemail@example.com" location=""
                           />
                 </Col>
             </Row>
      </Container>
		);
	}
}
