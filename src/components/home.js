import React from 'react';
import { Col, Row } from 'reactstrap';
import Footer from './Footer';
import Navibar from './Navibar';
import ListItems from './ListItems';
import { HOME_STRINGS } from './constants';

/*
this is the home page, where sub-components (the Navibar, AnotherList and footer components)
are exported to and displayed
*/
 class Home extends React.Component {
    render() {
        return (
            <div>
                  <div className={HOME_STRINGS.BG_IMG}>
                            <Navibar />
                        <Row className={HOME_STRINGS.SM_IMG}>
                           <Col>
                                <h1>{HOME_STRINGS.h1Text}</h1>
                                <h4>{HOME_STRINGS.h4Text}</h4>
                                <h5>{HOME_STRINGS.pText}</h5>
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
