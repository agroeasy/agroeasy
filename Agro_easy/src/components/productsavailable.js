import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';
import './home.css';


export default class ProductsAvailable extends Component {
       render() {
         return (
                 <Container className="items">
                       <Row>
                            <Col className="items" md={3}>
                                 <ul>
                                     <h6>Food Items</h6>
                                     <li style={{listStyle: 'none'}}><Link to='/yam' style={{color: 'DarkGray'}}>Yams</Link></li>
                                     <li style={{listStyle: 'none'}}><Link to='/rice' style={{color: 'DarkGray'}}>Rice</Link></li>
                                     <li style={{listStyle: 'none'}}><Link to='/beans' style={{color: 'DarkGray'}}>Beans</Link></li>
                                     <li style={{listStyle: 'none'}}><Link to='/garri' style={{color: 'DarkGray'}}>Garri</Link></li>
                                     <li style={{listStyle: 'none'}}><Link to='/fufu' style={{color: 'DarkGray'}}>Cassava Flour(fufu)</Link></li>
                                 </ul>
                            </Col>
                            <Col className="items" md={3}>
                                 <ul>
                                     <h6>Livestock / Poultry</h6>
                                     <li style={{listStyle: 'none'}}><Link to='/fishes' style={{color: 'DarkGray'}}>Fishes</Link></li>
                                     <li style={{listStyle: 'none'}}><Link to='/eggs' style={{color: 'DarkGray'}}>Eggs</Link></li>
                                     <li style={{listStyle: 'none'}}><Link to='/cattle' style={{color: 'DarkGray'}}>Cattle</Link></li>
                                     <li style={{listStyle: 'none'}}><Link to='/chicken'style={{color: 'DarkGray'}}>Chicken</Link></li>
                                     <li style={{listStyle: 'none'}}><Link to='/rams'style={{color: 'DarkGray'}}>Rams</Link></li>
                                 </ul>
                            </Col>
                            <Col className="items" md={3}>
                                 <ul>
                                     <h6>Fruits / vegetables</h6>
                                     <li style={{listStyle: 'none'}}><Link to='/cabbage' style={{color: 'DarkGray'}}>Cabbage</Link></li>
                                     <li style={{listStyle: 'none'}}><Link to='/lettuse' style={{color: 'DarkGray'}}>Lettuse</Link></li>
                                     <li style={{listStyle: 'none'}}><Link to='/tomatoes' style={{color: 'DarkGray'}}>Tomatoes</Link></li>
                                     <li style={{listStyle: 'none'}}><Link to='/oranges' style={{color: 'DarkGray'}}>Oranges</Link></li>
                                     <li style={{listStyle: 'none'}}><Link to='/fufu'style={{color: 'DarkGray'}}>Plaintain</Link></li>
                                 </ul>
                            </Col>
                            <Col className="items" md={3}>
                                 <ul>
                                     <h6>Spices</h6>
                                     <li style={{listStyle: 'none'}}><Link to='/onions' style={{color: 'DarkGray'}}>Onions</Link></li>
                                     <li style={{listStyle: 'none'}}><Link to='/ginger' style={{color: 'DarkGray'}}>Ginger</Link></li>
                                     <li style={{listStyle: 'none'}}><Link to='/garlic' style={{color: 'DarkGray'}}>Garlic</Link></li>
                                     <li style={{listStyle: 'none'}}><Link to='/pepper' style={{color: 'DarkGray'}}>Pepper</Link></li>
                                     <li style={{listStyle: 'none'}}><Link to='/curry'style={{color: 'DarkGray'}}>Curry</Link></li>
                                 </ul>
                            </Col>
                       </Row>
                 </Container>
         );
       }
}
