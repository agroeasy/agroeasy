import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import ProductsAvailable from './productsAvailable/ProductsAvailable';
import {FOOTER_STRINGS} from './constants';

const {lowerFooter, footer, footerContent, footerText} = FOOTER_STRINGS;
/*
This will contain the productsavailable components and other
neccessary info
*/
export default class  Footer extends Component {
  render () {
    return (
            <div className={footer}>
                <div>
                   <ProductsAvailable />  
                </div>
                <div>
                   <Container fluid className={lowerFooter}>
                      <Row> 
                         <Col>  
                            <h6 className={footerContent}>
                              {footerText}
                            </h6>
                         </Col>
                      </Row>
                   </Container>
                </div>
            </div>
         );
    }
}
