import React from 'react';
import { Form, FormGroup, Input,Label, FormText, Button,
Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './home.css';

/*component for contact-us */
class ContactUs extends React.Component {
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
               <a href="#" className="navLink" color="danger" onClick={this.toggle}>Contact Us{this.props.buttonLabel}</a>
               <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Contact Us</ModalHeader>
                    <ModalBody>
                       <Form>
                           <FormGroup>
                               <Label for="exampleName">Name</Label>
                               <Input type="text" name="name" id="exampleName" placeholder="name here" />
                           </FormGroup>
                           <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="email@example.com" />
                           </FormGroup>
                           <FormGroup>
                                <Label for="exampleMessage">message</Label>
                                <Input type="textarea" name="message" id="exampleMessage" placeholder="text here" />
                          </FormGroup>
                      </Form>
                  </ModalBody>
                  <ModalFooter>
                     <Button color="danger" onClick={this.toggle} email="exampleEmail.com">Submit</Button>{' '}
                     <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                  </ModalFooter>
              </Modal>
         </div>
    );
  }
}
export default ContactUs;