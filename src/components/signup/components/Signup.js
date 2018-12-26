import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import PropTypes from 'prop-types';

import * as signupActions from '../actions';
import SignupForm from './SignupForm';
import { SIGNUP_STRINGS } from '../constants';

const { PRIMARY, TITLE } = SIGNUP_STRINGS;
class Signup extends React.Component {
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
        const { signupRequest } = this.props.actions;
        form.validateFields((error, values ) => {
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
                typeOfProducts:values.typeOfProducts,
                username: values.username,
            };
            signupRequest(user);
        });

    }
  
    saveFormRef = formRef => {
        this.formRef = formRef;
    }
  
    render() {
        return (
            <div>
                <span type={PRIMARY} onClick={this.showModal}>{TITLE}</span>
                <SignupForm
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                />
            </div>
        );
    }
}

Signup.propTypes = {
    actions: PropTypes.object,
    form: PropTypes.object,
    onCancel: PropTypes.func,
    onCreate: PropTypes.func,
    signupState: PropTypes.object,
    visible: PropTypes.bool,
};

const mapStateToProps = state => ({ 
    signupState: state.signup,
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(signupActions, dispatch),
});

export default connect(mapStateToProps,mapDispatchToProps)(Signup); 
