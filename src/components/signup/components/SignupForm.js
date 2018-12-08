import PropTypes from 'prop-types';
import React from 'react';
import {  Button, Form, Input, Modal } from 'antd';

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
                firstName: '',
                lastName: '',
                password: '',
                username: '',
            },
        };

        this.handleChange = this.handleChange.bind(this);
    }
    
    componentDidMount() {
        // To disabled submit button at the beginning.
        this.props.form.validateFields();
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values.firstname);
                this.setState({ submitted: true });
                const { dispatch } = this.props;
                const { user } = this.state;
                this.setState({
                    user: {
                        ...user,
                        firstName: values.firstname,
                        lastName: values.lastname,
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
            </Modal>
        );
    }
}
const SignupForm = Form.create()(SignupModal);

SignupModal.propTypes = {
    form: PropTypes.object,
    onCancel: PropTypes.func,
    onCreate: PropTypes.func,
    visible: PropTypes.bool,
};

export default SignupForm;
