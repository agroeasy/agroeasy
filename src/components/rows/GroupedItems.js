import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';
import '../home.css';

//This component encapsulates items on productsavailable.js
export default class GroupedItems extends Component {
	render() {
		return (
              <Container>
                     <Row>
                        <Col className="groupedItems">
                           <ul>
                              <h6>{this.props.heading}</h6>
                              <li><Link to={this.props.link1} style={{color: 'DarkGray'}}>{this.props.item1}</Link></li>
                              <li><Link to={this.props.link2} style={{color: 'DarkGray'}}>{this.props.item2}</Link></li>
                              <li><Link to={this.props.link3} style={{color: 'DarkGray'}}>{this.props.item3}</Link></li>
                              <li><Link to={this.props.link4} style={{color: 'DarkGray'}}>{this.props.item4}</Link></li>
                              <li><Link to={this.props.link5} style={{color: 'DarkGray'}}>{this.props.item5}</Link></li>
                           </ul>              
                        </Col>
                     </Row>
              </Container>
			);
	}
}