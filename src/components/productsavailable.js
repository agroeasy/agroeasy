import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import GroupedItems from './rows/GroupedItems';
import { Fishes, Eggs, Cattle, Chicken, Ram, Yam, Rice, Beans, Garri,
         Fufu, Cabbage, Lettuse, Tomatoes, Oranges, Plantain, Onions,
         Pepper, Ginger, Garlic, Curry, FOODSITEMS
} from './constants';



//List of items according to groups
export default class ProductsAvailable extends Component {
       render() {
         return (
                 <Container className="productsAvailable">
                       <Row>
                            <Col className="items" md={3}>
                                 <GroupedItems item1={FOODSITEMS.yam} link1={Yam} item2="Rice" link2={Rice} item3="Beans" link3={Beans}
                                               item4="Garri" link4={Garri} item5="Cassava flour (Fufu)" link5={Fufu} 
                                               heading="Food Items" />
                            </Col>
                            <Col className="items" md={3}>
                                 <GroupedItems item1="Fishes" link1={Fishes} item2="Eggs" link2={Eggs} item3="Cattle" link3={Cattle}
                                               item4="Chicken" link4={Chicken} item5="Ram" link5={Ram} heading="livestock & Poultry"
                                /> 
                            </Col>
                            <Col className="items" md={3}>
                                 <GroupedItems item1="Cabbage" link1={Cabbage} item2="Lettuse" link2={Lettuse} item3="Tomatoes" 
                                               link3={Tomatoes} item4="Oranges" link4={Oranges} item5="Plantain" link5={Plantain} 
                                               heading="Fruits & Vegetables"
                                  />
                            </Col>
                            <Col className="items" md={3}>
                                 <GroupedItems item1="Curry" link1={Curry} item2="Garlic" link2={Garlic} item3="Ginger" 
                                               link3={Ginger} item4="Pepper" link4={Pepper} item5="Onions" link5={Onions} 
                                               heading="Spices" 
                                  />
                            </Col>
                       </Row>
                 </Container>
         );
       }
}
