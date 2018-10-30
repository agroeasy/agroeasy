import React from 'react';
import { Container, Row, Col, Button, Modal, ModalHeader, 
         ModalBody, ModalFooter, Badge,ButtonGroup,ButtonToolbar 
} from 'reactstrap';
import { Image } from 'react-bootstrap';
import '../home.css';

//this omponent was reused for row(1 -4) 
class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }       

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
           <Image src={this.props.pix} alt="#" style={{width: '200px', height: '110px'}} onClick={this.toggle}  thumbnail/>
              <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  <ModalHeader toggle={this.toggle}>{this.props.title}</ModalHeader>
                  <ModalBody style={{width: "100%", height: "30%"}}>
                      <Container>
                           <Row>
                               <Col className="details">
                                   <Image src={this.props.pix} style={{maxWidth: '100%', height: 'auto', display: 'block'}} thumbnail/>
                                   <br /><br /><hr />
                                   <div>
                                       <h6 style={{marginTop: '17px'}}><b>Location:</b>{this.props.location}</h6>
                                       
                                       <h6 style={{marginTop: '17px'}}><b>Cost:</b> &nbsp; {this.props.tag}</h6>
                                       
                                       <h6 style={{marginTop: '17px'}}><b>Quantity available:</b>{this.props.quantity}</h6>
                                       
                                       <h6 style={{marginTop: '17px'}}><b>Phone no:</b> {this.props.phone}</h6>
                                       
                                       <h6 style={{marginTop: '17px'}}><b>Email:</b> {this.props.email}</h6>
                                   </div>
                               </Col>
                           </Row>
                      </Container>
                 </ModalBody>
                 <ModalFooter>
                     <Button color="success" size="sm" onClick={this.toggle}>Buy Now</Button>{' '}
                     <Button color="primary" size="sm" onClick={this.toggle}>Cancel</Button>
                 </ModalFooter>
              </Modal>
             <div className="details">
                   <p style={{marginTop: '5px'}}>
                      <h6>
                         {this.props.title}
                      <br />
                         <Badge color="secondary" style={{marginTop: '5px'}}>{this.props.tag}</Badge>
                      </h6>
                      <ButtonToolbar>
                          <ButtonGroup>
                              <Button className="button" color="success" size="sm" active>Buy Now</Button>{' '}
                              <Button className="button" color="light" size="sm" onClick={this.toggle}>More Info</Button>{' '}
                          </ButtonGroup>
                      </ButtonToolbar>
                   </p>
              </div>
      </div>
    );
  }
}

export default Products;
