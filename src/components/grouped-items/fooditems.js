import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';
import '../home.css';
import { Yam, Rice, Beans, Garri, Fufu } from '../constant';

//component for food items
export default class FoodItems extends Component {
	render() {
		return (
                <Container>
                       <Row>
                            <Col className="items">
                               <ul>
                                  <h6>Food Items</h6>
                                  <li><Link to={Yam} style={{color: 'DarkGray'}}>Yams</Link></li>
                                  <li><Link to={Rice} style={{color: 'DarkGray'}}>Rice</Link></li>
                                  <li><Link to={Beans} style={{color: 'DarkGray'}}>Beans</Link></li>
                                  <li><Link to={Garri} style={{color: 'DarkGray'}}>Garri</Link></li>
                                  <li><Link to={Fufu} style={{color: 'DarkGray'}}>Cassava Flour(fufu)</Link></li>
                                </ul>
                            </Col>
                       </Row>
                </Container>
			);
	}
}