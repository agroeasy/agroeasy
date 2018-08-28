import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import './home.css';
import ProductsAvailable from './productsavailable';


/*
This will contain the productsavailable components and other 
neccessary info
*/
export default class  Footer extends Component {
  render () {
    return (
            <div className="footer">
                                <br/><br/><br />
                                <ProductsAvailable />
                                <br />
                     <div className='lower-footer'>
                          <Container>
                            <br />
                               <Row>
                                   <Col md={12}>
                                      <h6>All rights reserved, Copyright © 2018 Agroeasy</h6>
                                   </Col>
                               </Row>
                         </Container>
                     </div>
            </div>
    );
  }
}
