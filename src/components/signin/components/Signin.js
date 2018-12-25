import React from 'react';

import SigninForm from './SigninForm';
import { SIGNIN_STRINGS } from '../constants';

const { PRIMARY, TITLE } = SIGNIN_STRINGS;

export default class Signin extends React.Component {
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
        form.validateFields(error => {
            if (error) {
                return error;
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
                <div type={PRIMARY} onClick={this.showModal}>{TITLE}</div>
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
