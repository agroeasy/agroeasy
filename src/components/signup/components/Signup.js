import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { message } from 'antd';

import * as signupActions from '../actions';
import SignupForm from './SignupForm';
import { SIGNUP_STRINGS } from '../constants';
import { getMessage, getisLoading, getisSuccessful, getStatus } from '../selectors';

const { PRIMARY, TITLE } = SIGNUP_STRINGS;
class Signup extends React.Component {
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
        const form = this.formRef.props.form;
        const { signupRequest } = this.props.actions;
        form.validateFields((error, values) => {
            if (error) {
                return error;
            }
            form.resetFields();
            const user = {
                address: values.address,
                city: values.city,
                country: values.country,
                createdAt: new Date(),
                email: values.email,
                firstName: values.firstName,
                lastName: values.lastName,
                password: values.password,
                phoneNumber: values.phoneNumber,
                state: values.state,
                typeOfProducts: values.typeOfProducts,
                username: values.username
            };
            signupRequest(user);
        });
    };

    saveFormRef = formRef => {
        this.formRef = formRef;
    };

    componentDidUpdate() {
        const { isSuccessful, signinfailMessage, signupError } = this.props;
        const { resetSignState } = this.props.actions;
        const { visible } = this.state;

        if (visible && isSuccessful) {
            this.setState({ visible: false });
            resetSignState();
        } else if (signupError) {
            message.error(signinfailMessage, 3) && resetSignState();
        }
    }

    render() {
        const { isLoading } = this.props;
        return (
            <div>
                <div type={PRIMARY} onClick={this.showModal}>
                    {TITLE}
                </div>
                <SignupForm
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                    isLoading={isLoading}
                />
            </div>
        );
    }
}

Signup.propTypes = {
    actions: PropTypes.object,
    form: PropTypes.object,
    isLoading: PropTypes.bool,
    isSuccessful: PropTypes.bool,
    onCancel: PropTypes.func,
    onCreate: PropTypes.func,
    signinfailMessage: PropTypes.string,
    signupError: PropTypes.string,
    visible: PropTypes.bool
};
const mapStateToProps = state => ({
    isLoading: getisLoading(state),
    isSuccessful: getisSuccessful(state),
    signinfailMessage: getMessage(state),
    signupError: getStatus(state)
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(signupActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Signup);
