import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';
import '../home.css';
import { Onions, Pepper, Ginger, Garlic, Curry } from '../constant';

class Spices extends Component {
    render () {
       return (
                <Container>
                   <Row>
                      <Col className="items">
                        <ul>
                           <h6>Spices</h6>
                           <li><Link to={Onions} style={{color: 'DarkGray'}}>Onions</Link></li>
                           <li><Link to={Ginger} style={{color: 'DarkGray'}}>Ginger</Link></li>
                           <li><Link to={Garlic} style={{color: 'DarkGray'}}>Garlic</Link></li>
                           <li><Link to={Pepper} style={{color: 'DarkGray'}}>Pepper</Link></li>
                           <li><Link to={Curry} style={{color: 'DarkGray'}}>Curry</Link></li>
                        </ul> 
                      </Col>
                   </Row>
                </Container>
        );
    }
}     
export default Spices;