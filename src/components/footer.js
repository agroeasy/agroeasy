import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import ProductsAvailable from './ProductsAvailable';
import {FOOTER_STRINGS} from './constants';


/*
This will contain the productsavailable components and other
neccessary info
*/
export default class  Footer extends Component {
  render () {
    return (
            <div className={FOOTER_STRINGS.footer}>
                <div>
                   <ProductsAvailable />  
                </div>
                <div>
                   <Container fluid className={FOOTER_STRINGS.lowerFooter}>
                      <Row> 
                         <Col>  
                            <h6 className={FOOTER_STRINGS.footerContent}>
                              {FOOTER_STRINGS.footerText}
                            </h6>
                         </Col>
                      </Row>
                   </Container>
                </div>
            </div>
         );
    }
}
