import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'antd';
import { FormGroup, Form, Input, Label } from 'reactstrap';
import { navLink, TEXTS } from './constants';

const { back, cancel, contactUs, email, message, name, primary, small, submit } = TEXTS;
export default class ContactUs extends Component {
  state = {
    visible: false,
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleCancel = () => {
    this.setState({ visible: false });
  }

  render() {
    const { visible } = this.state;
    return (
      <div>
        <div onClick={this.showModal} className={navLink} >{contactUs}</div>
        <Modal visible={visible} title={contactUs} onOk={this.handleOk} onCancel={this.handleCancel}
            footer={[
              <Button key={submit} type={primary} size={small} onClick={this.handleOk}>
                {submit}
              </Button>,
              <Button key={back} size={small} onClick={this.handleCancel}>{cancel}</Button>, ]} >
              <Form>
                <FormGroup>
                    <Label for="Name">{name}</Label>
                    <Input type="text" name="name" id="Name" placeholder="name here" />
                </FormGroup>
                <FormGroup>
                    <Label for="Email">{email}</Label>
                    <Input type="email" name="email" id="Email" placeholder="email@josh.com" />
                </FormGroup>
                <FormGroup>
                    <Label for="Message">{message}</Label>
                    <Input type="textarea" name="message" id="Message" placeholder="text here" />
                </FormGroup>
            </Form>
        </Modal>
      </div>
    );
  }
}


ContactUs.ropTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  message: PropTypes.string,
};
