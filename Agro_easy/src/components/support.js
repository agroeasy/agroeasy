import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Button, Container, Row, Col } from 'reactstrap';
import {Home} from './constant';
import './home.css';

/*
this component will contain imformation about the developter
 */
export default class About extends Component {
    render() {
        return (
          <div>
           <Container className='support'>
                 <Row>
                      <Col>
                                  <h1 className="display-3" style={{letterSpacing: '0.3em'}}>Coming soon!</h1>
                                     <p className="lead">
                                       <i>promises to be filled with information</i>
                                    </p>
                                      <hr />
                                     <p>

                                     </p>
                                     <p className="lead"><Link to={Home}><Button color="primary">back</Button></Link></p>
                      </Col>
                 </Row>
           </Container>

          </div>
        );
    }
}
