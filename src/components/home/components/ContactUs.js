import React from 'react';
/* import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { message } from 'antd'; */

import ContactForm from './ContactForm';
import { CONTACT_STRINGS } from '../constants';

const { PRIMARY, TITLE } = CONTACT_STRINGS;

class ContactUs extends React.Component {
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
        form.validateFields((error, values) => {
            if (error) {
                return error;
            }
            form.resetFields();
            const payload = {
                email: values.email,
                message: values.message,
                name: values.name,
                report: values.report,
            };
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
                <ContactForm
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                />
            </div>
        );
    }
}

export default ContactUs;
