import PropTypes from 'prop-types';
import React from 'react';
import {  Button, Form, Input, Modal } from 'antd';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

import { formItemLayout, INPUTS, SIGNUP_STRINGS } from './constants';
import signupRequest from '../action';

const FormItem = Form.Item;
const {
    CLASSNAME_SCROLLBAR,
    TITLE,
    REGISTER,
} = SIGNUP_STRINGS;

function generateSignupInputs(decorator) {
    return INPUTS.map(input => {
        const { field, inputType, label, rules } = input;

        return (
            <FormItem
                key={field}
                {...formItemLayout}
                label={label}
            >
                {
                    decorator(field, {
                        rules,
                    })(
                        <Input type={inputType} />
                    )
                }
            </FormItem>
        );
    });
}

class SignupModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            submitted: false,
            user: {
                address: '',
                city: '',
                country: '',
                email: '',
                firstName: '',
                lastName: '',
                password: '',
                phoneNumber: '',
                state: '',
                username: '',
            },
        };

    }
    
    componentDidMount() {
        // To disabled submit button at the beginning.
        this.props.form.validateFields();
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({ submitted: true });
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values.firstname);
                const { dispatch } = this.props;
                const { user } = this.state;
                this.setState({
                    user: {
                        ...user,
                        firstName: values.firstName,
                        lastName: values.lastName,
                        password: values.password,
                        username: values.username,
                    },
                });
                dispatch(signupRequest(user));
            }
        });
    }

    render() {
        const { form, onCancel, onCreate, visible } = this.props;
        const { getFieldDecorator } = form;
        const { registering } = this.props;

        return (
            <Modal
                visible={visible}
                title={TITLE}
                okText={TITLE}
                onCancel={onCancel}
                onOk={onCreate}
                className= {CLASSNAME_SCROLLBAR}
                footer={[
                    <Button form="myForm" key="submit" htmlType="submit">
                        { REGISTER }
                    </Button>,
                ]}
            >
            
                <Form id = "myForm" onSubmit={this.handleSubmit}>
                    {generateSignupInputs(getFieldDecorator)}
                </Form>
                { registering && 
                <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                }
            </Modal>
        );
    }
}
const SignupForm = Form.create()(SignupModal);

SignupModal.propTypes = {
    form: PropTypes.object,
    onCancel: PropTypes.func,
    onCreate: PropTypes.func,
    registering: PropTypes.bool,
    visible: PropTypes.bool,
};

/* function mapStateToProps(state) {
    const { registering } = state.registration;
    return {
        registering
    };
} */
const mapStateToProps = state => { 
    const { registering } = state;
    return{
        registering,
    };
};

/* const mapDispatchToProps = dispatch =>
    bindActionCreators({ signupRequest }, dispatch); */

connect(mapStateToProps)(SignupForm); 

export default SignupForm;
