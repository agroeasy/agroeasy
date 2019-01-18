import React from 'react';
import { Form, Icon, Input, Modal } from 'antd';
import PropTypes from 'prop-types';

import { INPUTS, CONTACT_STRINGS } from '../constants';

const FormItem = Form.Item;
const { TextArea } = Input;
const { TITLE, PLACEHOLDER } = CONTACT_STRINGS;

function generateContactInputs(decorator) {
    return INPUTS.map(input => {
        const { field, iconType, placeholder, rules } = input;

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
                        />
                    )
                }
            </FormItem>
            
        );
    });
}

class ContactModal extends React.Component {
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
                    {generateContactInputs(getFieldDecorator)}
                    <FormItem>
                        {
                            getFieldDecorator('message', {
                                rules:
                                [{ required: true }],
                            })(
                                <TextArea
                                    rows = {4}
                                    placeholder={PLACEHOLDER}
                                />
                            )
                        }
                    </FormItem>
                </Form>
            </Modal>
        );
    }
}

const ContactForm = Form.create()(ContactModal);

ContactModal.propTypes = {
    form: PropTypes.object,
    onCancel: PropTypes.func,
    onCreate: PropTypes.func,
    visible: PropTypes.bool,
};

export default ContactForm;

