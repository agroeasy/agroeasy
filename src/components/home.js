import React from 'react';
import './bootstrap.min.css';
import { InputGroup, InputGroupAddon, Jumbotron, Col, Input, Row, Button, Container } from 'reactstrap';
import './home.css';
import Footer from './footer';
import Navibar from './Navibar';
import ListItems from './anotherlist';

/*
this is the home page, where sub-components (the Navibar, AnotherList and footer components)
are exported to and displayed
*/
 class Home extends React.Component {
    render() {
        return (
            <div>
                  <Jumbotron className="bg-img">
                            <Navibar />
                        <Row style ={{marginTop:'100px'}}>
                           <Col xs={12}>
                                <h1> Welcome Guest</h1>
                                <h4> Make us your distributor and we will tell the world about your business.</h4>
                                <p style={{textAlign: 'center'}}>
                                    <h4> Dear customer, we make sure you get a discount anytime you patronize us.
                                         Give us a try.
                                    </h4>
                                 </p>
                          </Col>
                       </Row>
                       <br/>
                       <Container style={{width: '355px', textAlign: 'center'}}>
                          <Row>
                              <Col xs={12}>
                                <InputGroup>
                                  <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                                  <Input placeholder="search" />
                                  <Button variant="contained" color="primary" onClick={this.search}>ok</Button>
                               </InputGroup>
                             </Col>
                          </Row>
                       </Container>
                   </Jumbotron>
                   <ListItems />
                   <Footer />
            </div>

        );
    }
}
export default Home;
