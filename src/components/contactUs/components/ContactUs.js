import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, message } from 'antd';

import ContactForm from './ContactForm';
import * as contactMailActions from '../actions';
import { CONTACT_STRINGS } from '../constants';
import { getStatus } from '../selectors';

const { BTN_MAIL, CONTACT_US, DEFAULT, LARGE, MAIL, MSG_NOT_SENT, MSG_SENT } = CONTACT_STRINGS;

class ContactUs extends React.Component {
    state = {
        visible: false
    };

    showModal = () => {
        this.setState({ visible: true });
    };

    handleCancel = () => {
        this.setState({ visible: false });
    };

    handleCreate = () => {
        const { sendContactMail } = this.props.actions;
        const form = this.formRef.props.form;

        form.validateFields((error, { email, message, name, subject }) => {
            if (error) {
                return error;
            }

            form.resetFields();

            const payload = {
                email,
                message,
                name,
                subject
            };

            sendContactMail(payload);
            this.setState({ visible: false });
        });
    };

    saveFormRef = formRef => {
        this.formRef = formRef;
    };

    notifyMailStatus = () => {
        const { isMailSent } = this.props;

        if (isMailSent !== undefined) {
            isMailSent ? message.success(MSG_SENT, 5) : message.error(MSG_NOT_SENT, 5);
        }
    };

    render() {
        return (
            <div>
                <div className={CONTACT_US}>
                    <Button
                        className={BTN_MAIL}
                        icon={MAIL}
                        onClick={this.showModal}
                        size={LARGE}
                        type={DEFAULT}
                    >
                        {CONTACT_US}
                    </Button>
                </div>
                <ContactForm
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                />
                {this.notifyMailStatus()}
            </div>
        );
    }
}

ContactUs.propTypes = {
    actions: PropTypes.object,
    isMailSent: PropTypes.bool
};

const mapStateToProps = state => ({
    isMailSent: getStatus(state)
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(contactMailActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactUs);
