import React from 'react';
import { Col, Row, Container, Input, InputGroup, Button, InputGroupAddon } from 'reactstrap';
import { Link } from 'react-router-dom';
import { BottonText, More, ListItem_stings } from './constants';
import Row4 from './rows/row4';
import Row3 from './rows/row3';
import Row2 from './rows/row2';
import Row1 from './rows/row1';
import ProductLocation from './table-small';

/*
This is a component of varieties of products appearing
in no particular order
*/
class ListItems extends React.Component {
  render() {
    return (
           <Container fluid className={ListItem_stings.className1}>
             <Row>
                <Col md={3}>
                    <div>
                      <div className={ListItem_stings.smallDiv}>
                            <InputGroup>
                                  <InputGroupAddon addonType="prepend">
                                       <Button onClick={this.search}>{BottonText}</Button>
                                  </InputGroupAddon>
                                  <Input placeholder="search products" />   
                            </InputGroup>
                      </div>
                       <br />
                      <div className={ListItem_stings.smallDiv}>
                             <ProductLocation />
                      </div>
                    </div>
                </Col> 
                <Col md={7} className={ListItem_stings.smallDiv} >
                  <div className={ListItem_stings.rowItems}>
                         <Row1 />
                         <Row2 />
                         <Row3 />
                         <Row4 />
                  </div>
                  <div className={ListItem_stings.More}>
                    <Link to={More}>More</Link>
                  </div>
             </Col>
             <Col md={3}></Col>
         </Row>
      </Container>
    );
  }
}



export default ListItems;
