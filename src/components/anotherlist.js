import React from 'react';
import { Col, Row, Container, Jumbotron, Input, InputGroup, Button, InputGroupAddon } from 'reactstrap';
import { Link } from 'react-router-dom';
import './home.css';
import { ProductsAvailable } from './constant';
import Row4 from './rows/row4';
import Row3 from './rows/row3';
import Row2 from './rows/row2';
import Row1 from './rows/row1';
import FindOnLocation from './table-small';

/*
This is a component of varieties of products appearing
in no particular order
*/
class ListItems extends React.Component {
  render() {
    return (
        <div>
           <Jumbotron className="show-products-available" style={{backgroundColor: 'ash'}}>
             <Row>
                <Col md={3}>
                    <div>
                      <div  style={{backgroundColor: 'white'}}>
                            <InputGroup>
                                  <InputGroupAddon addonType="prepend">
                                       <Button onClick={this.search}>ok</Button>
                                  </InputGroupAddon>
                                  <Input placeholder="search products" />
                                 
                            </InputGroup>
                      </div>
                       <br /><br />
                      <div style={{backgroundColor: 'white'}} className="little-details">
                             <FindOnLocation />
                      </div>
                    </div>
                </Col> 
               <Col md={7} style={{backgroundColor: 'white'}}>
                  <div style={{ marginTop: '25px'}}>
                        <h6 style={{textAlign: 'center', marginTop: "-9%", marginBottom: "4px"}}>
                          <Link to={ProductsAvailable}>Products Available</Link>
                        </h6>
                 </div>
                       <br />
                       <Row>
                         <Row1 />
                       </Row>
                       <br />
                       <Row>
                         <Row2/>
                       </Row>
                       <br />
                       <Row>
                         <Row3 />
                       </Row>
                       <br />
                       <Row>
                         <Row4 />
                       </Row>
               <div className="link-to-more">
                   <Link to='/more-products/'>
                       More
                   </Link>
              </div>
            </Col>
            <Col md={3}></Col>
         </Row>
      </Jumbotron>
     </div>
 
    );
  }
}



export default ListItems;
