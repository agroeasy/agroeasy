import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';
import '../home.css';
import { Cabbage, Lettuse, Tomatoes, Oranges, Plantain } from '../constant';


class FruitsAndVegetables extends Component {
	render() {
		return (
                 <Container>
                     <Row>
                          <Col className="items">
                               <ul>
                                   <h6>Fruits / vegetables</h6>
                                   <li><Link to={Cabbage} style={{color: 'DarkGray'}}>Cabbage</Link></li>
                                   <li><Link to={Lettuse} style={{color: 'DarkGray'}}>Lettuse</Link></li>
                                   <li><Link to={Tomatoes} style={{color: 'DarkGray'}}>Tomatoes</Link></li>
                                   <li><Link to={Oranges} style={{color: 'DarkGray'}}>Oranges</Link></li>
                                   <li><Link to={Plantain} style={{color: 'DarkGray'}}>Plaintain</Link></li>
                                 </ul>
                          </Col>
                     </Row>
                 </Container>
			);
	} 
}
export default FruitsAndVegetables;