import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { message, Button } from 'antd';

import SigninForm from './SigninForm';
import { SIGNIN_STRINGS } from '../constants';
import * as signinActions from '../actions';
import Auth from '../../auth0';

import {
    getIsLoading,
    getSigninFailureMessage,
    getSigninStatus,
    getisSuccessful
} from '../selectors';

const { PRIMARY, TITLE } = SIGNIN_STRINGS;
 
class Signin extends React.Component {
    state = {
        visible: false,
    };

    showModal = () => {
        this.setState({ visible: true });
    }

    handleCancel = () => {
        const { resetSignState } = this.props.actions;
        
        this.setState({ visible: false });
        resetSignState();
    }

    handleCreate = () => {
        const form = this.formRef.props.form;
        const { signinRequest } = this.props.actions;
        form.validateFields((error, { email, password }) => {
            if (error) {
                return error;
            }
            form.resetFields();
            const payload = {
                email,
                password,
            };
            signinRequest(payload);
        });
    }

    handleAuth = () => {
        const auth = new Auth();
        auth.login();
    };

    saveFormRef = formRef => {
        this.formRef = formRef;
    }

    componentDidUpdate(){
        const {
            isSuccessful,
            actions: { resetSignState },
            signinFailMessage,
            signinError,
        } = this.props;
        const { visible } = this.state;

        if (visible && isSuccessful) {
            this.setState({ visible: false });
            resetSignState();
        } else if (signinError) {
            message.error(signinFailMessage,3);
            resetSignState();
        }
    }

    render() {
        const { isLoading } = this.props;
        return (
            <div>
                <div type={PRIMARY} onClick={this.showModal}>{TITLE}</div>
                <SigninForm
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                    isLoading={isLoading}
                    handleAuth={this.handleAuth}
                />
            </div>
        );
    }
}

Signin.propTypes = {
    actions: PropTypes.object,
    isLoading: PropTypes.bool,
    isSuccessful:PropTypes.bool,
    siginData: PropTypes.object,
    signinError: PropTypes.string,
    signinFailMessage: PropTypes.string,
};

const mapStateToProps = state => ({
    isLoading: getIsLoading(state),
    isSuccessful: getisSuccessful(state),
    signinError: getSigninStatus(state),
    signinFailMessage: getSigninFailureMessage(state),
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(signinActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
