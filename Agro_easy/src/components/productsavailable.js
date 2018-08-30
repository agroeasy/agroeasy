import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';
import './home.css';
import { Yam, Rice, Beans, Garri, Fufu,
         Fishes, Eggs, Cattle,Chicken, Ram,
         Cabbage, Lettuse, Tomatoes, Oranges, Plantain,
          Onions, Pepper, Ginger, Garlic, Curry} from './constant';

/*
List of items according to groups
*/
export default class ProductsAvailable extends Component {
       render() {
         return (
                 <Container className="items">
                       <Row>
                            <Col className="items" md={3}>
                                 <ul>
                                     <h6>Food Items</h6>
                                     <li style={{listStyle: 'none'}}><Link to={Yam} style={{color: 'DarkGray'}}>Yams</Link></li>
                                     <li style={{listStyle: 'none'}}><Link to={Rice} style={{color: 'DarkGray'}}>Rice</Link></li>
                                     <li style={{listStyle: 'none'}}><Link to={Beans} style={{color: 'DarkGray'}}>Beans</Link></li>
                                     <li style={{listStyle: 'none'}}><Link to={Garri} style={{color: 'DarkGray'}}>Garri</Link></li>
                                     <li style={{listStyle: 'none'}}><Link to={Fufu} style={{color: 'DarkGray'}}>Cassava Flour(fufu)</Link></li>
                                 </ul>
                            </Col>
                            <Col className="items" md={3}>
                                 <ul>
                                     <h6>Livestock / Poultry</h6>
                                     <li style={{listStyle: 'none'}}><Link to={Fishes} style={{color: 'DarkGray'}}>Fishes</Link></li>
                                     <li style={{listStyle: 'none'}}><Link to={Eggs} style={{color: 'DarkGray'}}>Eggs</Link></li>
                                     <li style={{listStyle: 'none'}}><Link to={Cattle} style={{color: 'DarkGray'}}>Cattle</Link></li>
                                     <li style={{listStyle: 'none'}}><Link to={Chicken} style={{color: 'DarkGray'}}>Chicken</Link></li>
                                     <li style={{listStyle: 'none'}}><Link to={Ram} style={{color: 'DarkGray'}}>Rams</Link></li>
                                 </ul>
                            </Col>
                            <Col className="items" md={3}>
                                 <ul>
                                     <h6>Fruits / vegetables</h6>
                                     <li style={{listStyle: 'none'}}><Link to={Cabbage} style={{color: 'DarkGray'}}>Cabbage</Link></li>
                                     <li style={{listStyle: 'none'}}><Link to={Lettuse} style={{color: 'DarkGray'}}>Lettuse</Link></li>
                                     <li style={{listStyle: 'none'}}><Link to={Tomatoes} style={{color: 'DarkGray'}}>Tomatoes</Link></li>
                                     <li style={{listStyle: 'none'}}><Link to={Oranges} style={{color: 'DarkGray'}}>Oranges</Link></li>
                                     <li style={{listStyle: 'none'}}><Link to={Plantain} style={{color: 'DarkGray'}}>Plaintain</Link></li>
                                 </ul>
                            </Col>
                            <Col className="items" md={3}>
                                 <ul>
                                     <h6>Spices</h6>
                                     <li style={{listStyle: 'none'}}><Link to={Onions} style={{color: 'DarkGray'}}>Onions</Link></li>
                                     <li style={{listStyle: 'none'}}><Link to={Ginger} style={{color: 'DarkGray'}}>Ginger</Link></li>
                                     <li style={{listStyle: 'none'}}><Link to={Garlic} style={{color: 'DarkGray'}}>Garlic</Link></li>
                                     <li style={{listStyle: 'none'}}><Link to={Pepper} style={{color: 'DarkGray'}}>Pepper</Link></li>
                                     <li style={{listStyle: 'none'}}><Link to={Curry} style={{color: 'DarkGray'}}>Curry</Link></li>
                                 </ul>
                            </Col>
                       </Row>
                 </Container>
         );
       }
}
