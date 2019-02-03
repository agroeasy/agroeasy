import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { message } from 'antd';

import SigninForm from './SigninForm';
import { SIGNIN_STRINGS } from '../constants';
import * as signinActions from '../actions';
import * as  signinSelectors from '../selectors';

const { getData, getStatus } = signinSelectors;
const { FAIL_MESSAGE, PRIMARY, SUCCESS, SUCCESS_MESSAGE, TITLE } = SIGNIN_STRINGS;

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
            this.setState({ visible: false });
        });

    }

    saveFormRef = formRef => {
        this.formRef = formRef;
    }
    notifySigninStatus = () => {

    }

    componentDidMount() {
        const { resetSignState } = this.props.actions;
        const { signinStatus, siginData } = this.props;

        if(signinStatus !== undefined){
            signinStatus === SUCCESS ?
                message.success(`${siginData.user.firstName}  ${SUCCESS_MESSAGE}`, 5):
                message.error(siginData.title, 5);
        }
        resetSignState();
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

Signin.propTypes = {
    actions: PropTypes.object,
    siginData: PropTypes.object,
    signinStatus: PropTypes.string,
};
const mapStateToProps = state => ({
    siginData: getData(state),
    signinStatus: getStatus(state),
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(signinActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
