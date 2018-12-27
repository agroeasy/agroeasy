import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SigninForm from './SigninForm';
import { SIGNIN_STRINGS } from '../constants';
import * as signinActions from '../actions';

const { PRIMARY, TITLE } = SIGNIN_STRINGS;

class Signin extends React.Component {
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
        const { signinRequest } = this.props.actions;
        form.validateFields((error, values) => {
            if (error) {
                return error;
            }
            const { email, password } = values;

            signinRequest(email, password);
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
                <span type={PRIMARY} onClick={this.showModal}>{TITLE}</span>
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

Signin.propTypes = {
    actions: PropTypes.object,
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(signinActions, dispatch),
});

export default connect(mapDispatchToProps)(Signin);
