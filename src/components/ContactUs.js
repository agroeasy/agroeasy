import React from 'react';
import { Form, FormGroup, Input,Label, Button,
Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { navLink, href, TEXTS } from './constants';

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
               <a to={href} className={navLink} color="danger" onClick={this.toggle}>{TEXTS.text1}{this.props.buttonLabel}</a>
               <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>{TEXTS.text1}</ModalHeader>
                    <ModalBody>
                       <Form>
                           <FormGroup>
                               <Label for="exampleName">{TEXTS.text2}</Label>
                               <Input type="text" name="name" id="exampleName" placeholder="name here" />
                           </FormGroup>
                           <FormGroup>
                                <Label for="exampleEmail">{TEXTS.text3}</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="email@example.com" />
                           </FormGroup>
                           <FormGroup>
                                <Label for="exampleMessage">{TEXTS.text4}</Label>
                                <Input type="textarea" name="message" id="exampleMessage" placeholder="text here" />
                          </FormGroup>
                      </Form>
                  </ModalBody>
                  <ModalFooter>
                     <Button color="danger" onClick={this.toggle} email="exampleEmail.com">{TEXTS.botton1}</Button>{' '}
                     <Button color="secondary" onClick={this.toggle}>{TEXTS.botton2}</Button>
                  </ModalFooter>
              </Modal>
         </div>
    );
  }
}
export default ContactUs;