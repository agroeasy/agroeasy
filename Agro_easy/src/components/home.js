import React from 'react';
import { InputGroup, InputGroupAddon, Jumbotron, Col,
         Button, Input, Row, Container
} from 'reactstrap';
import Footer from './footer';
import AnotherList from './anotherlist';
import Navibar from './Navibar';
import './home.css';
import './bootstrap.min.css';

 class Home extends React.Component {
    render() {
        return (
            <div>
                  <Jumbotron className="bg-img">
                            <Navibar />
                        <Row style ={{marginTop:'100px'}}>
                           <Col md="12">
                                <h1> Welcome Guest</h1>
                                <h4> Makes us your distributor and we will tell the world about your business.</h4>
                                <p style={{textAlign: 'center'}}>
                                    <h4> Dear customer, we make sure you get a discount anytime you patronize us.
                                         Give us a try.
                                    </h4>
                                 </p>
                          </Col>
                       </Row>
                       <br/><br/>
                       <Container style={{width: '550px', textAlign: 'center'}}>
                             <InputGroup>
                                  <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                                  <Input placeholder="search" />
                                  <Button onClick={this.search}>Ok</Button>
                             </InputGroup>
                       </Container>
                   </Jumbotron>
                   <AnotherList />
                   <hr />
                   <Footer />
            </div>

        );
    }
}
export default Home;
