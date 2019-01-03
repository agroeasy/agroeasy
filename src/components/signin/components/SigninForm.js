import PropTypes from 'prop-types';
import React from 'react';
import { Form, Icon, Input, Modal } from 'antd';

import { INPUTS, SIGNIN_STRINGS } from '../constants';

const FormItem = Form.Item;
const { TITLE } = SIGNIN_STRINGS;

function generateSiginInputs(decorator) {
    return INPUTS.map(input => {
        const { field, iconType, placeholder, rules, type } = input;

        return (
            <FormItem
                key={field}
            >
                {
                    decorator(field, {
                        rules,
                    })(
                        <Input
                            placeholder={placeholder}
                            prefix={<Icon type={iconType} />}
                            type={type}
                        />
                    )
                }
            </FormItem>
        );
    });
}

class SigninModal extends React.Component {
    render() {
        const { form, visible, onCancel, onCreate } = this.props;
        const { getFieldDecorator } = form;

        return (
            <Modal
                visible={visible}
                title={TITLE}
                okText={TITLE}
                onCancel={onCancel}
                onOk={onCreate}
            >
                <Form>
                    {generateSiginInputs(getFieldDecorator)}
                </Form>
            </Modal>
        );
    }
}

const SigninForm = Form.create()(SigninModal);

SigninModal.propTypes = {
    form: PropTypes.object,
    onCancel: PropTypes.func,
    onCreate: PropTypes.func,
    visible: PropTypes.bool,
};

export default SigninForm;
