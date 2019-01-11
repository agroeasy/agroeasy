import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { message } from 'antd';

import SigninForm from './SigninForm';
import { SIGNIN_STRINGS } from '../constants';
import * as signinActions from '../actions';
import * as  signinSelectors from '../selectors';

const { getMessage, getStatus } = signinSelectors;
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
            form.resetFields();
            const payload = {
                email: values.email,
                password: values.password,
            };
            signinRequest(payload);
            this.setState({ visible: false });
        });
        
    }

    saveFormRef = formRef => {
        this.formRef = formRef;
    }
    notifySigninStatus = () => {
        const { resetSignState } = this.props.actions;
        const { signinMessage, signinStatus } = this.props;

        if(signinStatus){
            message.success(signinMessage, 5);
        } else {
            message.error(signinMessage, 5);
        }
        resetSignState();
    }
    
    render() {
        const {  signinStatus } = this.props;
       
        return (
            <div>
                <div type={PRIMARY} onClick={this.showModal}>{TITLE}</div>
                <SigninForm
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                />
                {
                    signinStatus !== undefined &&
                    <span>
                        { this.notifySigninStatus() }
                    </span>
                }

            </div>
        );
    }
}

Signin.propTypes = {
    actions: PropTypes.object,
    signinMessage: PropTypes.string,
    signinStatus: PropTypes.bool,
};
const mapStateToProps = state => ({
    signinMessage: getMessage(state),
    signinStatus: getStatus(state),
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(signinActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
