import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import { navLink, TEXTS } from './constants';
import FillForm from './SmallerComponents/Form';

const { text1, submit, cancel, small, primary, back } = TEXTS;
export default class ContactUs extends Component {
  state = {
    loading: false,
    visible: false,
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  }

  handleCancel = () => {
    this.setState({ visible: false });
  }

  render() {
    const { visible, loading } = this.state;
    return (
      <div>
        <div onClick={this.showModal} className={navLink} >{text1}</div>
        <Modal visible={visible} title={text1} onOk={this.handleOk} onCancel={this.handleCancel}
            footer={[
              <Button key={submit} type={primary} size={small} loading={loading} onClick={this.handleOk}>
                {submit}
              </Button>,
             <Button key={back} size={small} onClick={this.handleCancel}>{cancel}</Button>, ]} >
           <FillForm />
        </Modal>
      </div>
    );
  }
}