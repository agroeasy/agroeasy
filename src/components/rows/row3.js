import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import Products from './Product';
import { ROW_ITEMS_3 } from './constants';


/*this the third on component anotherlist.js */
export default class Row1 extends Component {
	render() {
		return (
        <Container fluid>
            <Row>
              {
               ROW_ITEMS_3.map(item => (
                    <Col key={item.name}>
                        <Products
                            title={item.name} pix={item.pix}
                            tag={item.cost} key={item.name}    
                         />
                     </Col>
                 ))
              }
           </Row>
        </Container>
		);
	}
}
