import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col } from 'reactstrap';
import {Home, bottonText, h1, pTexts } from './constants';
import './home.css';


//this component will contain imformation about the developter 
export default class About extends Component {
    render() {
        return (
          <div>
             <Container>
                 <Row>
                      <Col className='support'>
                          <h1 className="display-3">{h1}</h1>
                          <p className="lead">
                              <i>{pTexts}</i>
                          </p>
                           <hr />          
                          <p className="lead"><Link to={Home}><Button color="primary">{bottonText}</Button></Link></p><br />
                      </Col>
                 </Row>
             </Container>  
          </div>
        );
    }
}
