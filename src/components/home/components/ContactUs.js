import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { message } from 'antd';

import ContactForm from './ContactForm';
import * as contactMailActions from '../actions';
import { CONTACT_STRINGS } from '../constants';
import { getStatus } from '../selectors';

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
        const { sendContactMail } = this.props.actions;
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
                subject: values.subject,
            };
            sendContactMail(payload);
            this.setState({ visible: false });
        });
        
    }

    saveFormRef = formRef => {
        this.formRef = formRef;
    }

    render() {
        const { isMailSent } = this.props;
        return (
            <div>
                <div type={PRIMARY} onClick={this.showModal}>{TITLE}</div>
                <ContactForm
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                />
                { 
                    isMailSent !== undefined &&
                    <span>
                        { isMailSent ? message.success("message succesfully sent", 5) :
                            message.error("message not sent", 5)}
                    </span>
                }
            </div>
        );
    }
}

ContactUs.propTypes = {
    actions: PropTypes.object,
    isMailSent: PropTypes.bool,
};

const mapStateToProps = state => ({
    isMailSent: getStatus(state),
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(contactMailActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactUs);
