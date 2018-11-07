import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';
import {strings} from './constants';

const {className1, className2} = strings;
//This component encapsulates items on productsavailable.js
export default class GroupedItems extends Component {
	render() {
		return (
          <Container>
                    <Row>
                        <Col className={className1}>
                           <ul>
                              <h6>{this.props.heading}</h6>
                               {
                                 this.props.items.map(item => (<li key={item.name}>
                                 <Link to={item.link} className={className2}> 
                                   {item.name}
                                 </Link></li>))
                                 }
                           </ul>              
                        </Col>
                  </Row> 
      </Container> 
		);
	}
}
