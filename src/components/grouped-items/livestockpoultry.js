import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';
import '../home.css';
import { Fishes, Eggs, Cattle,Chicken, Ram} from '../constant';


export default class LivestockPoultry extends Component {
	render() {
		return (
              <Container>
                     <Row>
                        <Col>
                           <ul>
                              <h6>Livestock / Poultry</h6>
                              <li><Link to={Fishes} style={{color: 'DarkGray'}}>Fishes</Link></li>
                              <li><Link to={Eggs} style={{color: 'DarkGray'}}>Eggs</Link></li>
                              <li><Link to={Cattle} style={{color: 'DarkGray'}}>Cattles</Link></li>
                              <li><Link to={Chicken} style={{color: 'DarkGray'}}>Chicken</Link></li>
                              <li><Link to={Ram} style={{color: 'DarkGray'}}>Rams</Link></li>
                           </ul>              
                        </Col>
                     </Row>
              </Container>
			);
	}
}