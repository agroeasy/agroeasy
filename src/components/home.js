import React from 'react';
import { Col, Row } from 'reactstrap';
import Footer from './Footer';
import Navibar from './Navibar';
import ListItems from './ListItems';
import { HOME_STRINGS } from './constants';


const {BG_IMG, SM_IMG, h1Text, h4Text, pText } = HOME_STRINGS;
/*
this is the home page, where sub-components (the Navibar, AnotherList and footer components)
are exported to and displayed
*/
 class Home extends React.Component {
    render() {
        return (
            <div>
                  <div className={BG_IMG}>
                            <Navibar />
                        <Row className={SM_IMG}>
                           <Col>
                                <h1>{h1Text}</h1>
                                <h4>{h4Text}</h4>
                                <h5>{pText}</h5>
                          </Col>
                       </Row>
                      
                   </div>
                   <ListItems />
                   <Footer />
            </div>

        );
    }
}
export default Home;
