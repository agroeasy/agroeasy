import React from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader
} from 'reactstrap';

import { navLink, href, TEXTS } from './constants';

const {text1, text2, text3, text4, botton1, botton2} = TEXTS;
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
               <a to={href} className={navLink} color="danger" onClick={this.toggle}>{text1}{this.props.buttonLabel}</a>
               <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>{text1}</ModalHeader>
                    <ModalBody>
                       <Form>
                           <FormGroup>
                               <Label for="exampleName">{text2}</Label>
                               <Input type="text" name="name" id="exampleName" placeholder="name here" />
                           </FormGroup>
                           <FormGroup>
                                <Label for="exampleEmail">{text3}</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="email@example.com" />
                           </FormGroup>
                           <FormGroup>
                                <Label for="exampleMessage">{text4}</Label>
                                <Input type="textarea" name="message" id="exampleMessage" placeholder="text here" />
                          </FormGroup>
                      </Form>
                  </ModalBody>
                  <ModalFooter>
                     <Button color="danger" onClick={this.toggle} email="exampleEmail.com">{botton1}</Button>{' '}
                     <Button color="secondary" onClick={this.toggle}>{botton2}</Button>
                  </ModalFooter>
              </Modal>
         </div>
    );
  }
}

ContactUs.propTypes = {
    buttonLabel: PropTypes.string,
    className: PropTypes.string,
};

export default ContactUs;
