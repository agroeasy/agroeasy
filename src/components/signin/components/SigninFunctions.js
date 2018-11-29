import React, { Component } from 'react';
import SigninForm from './SigninModal';
import { SIGNIN_STRINGS } from './constants';
const {
    PRIMARY,    
    TITLE,
} = SIGNIN_STRINGS;

export default class Signin extends Component {
    state = {
        visible: false,
    };
  
    showModal = () => {
        this.setState({ visible: true });
    }
  
    handleCancel = () => {
        this.setState({ visible: false });
    }
  
    handleCreate = () => {
        const form = this.formRef.props.form;
        form.validateFields(err => {
            if (err) {
                return;
            }
  
            form.resetFields();
            this.setState({ visible: false });
        });
    }
  
    saveFormRef = formRef => {
        this.formRef = formRef;
    }
   
    render() {
        return (
            <div>
                <h6 type={PRIMARY} onClick={this.showModal}>{TITLE}</h6>
                <SigninForm
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                />
            </div>
        );
    }
}
