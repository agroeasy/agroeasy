import React from 'react';
import PropTypes from 'prop-types';
import { SIGNIN_STRINGS } from './constants';

import { 
    Checkbox,
    Form,
    Icon,
    Input,
    Modal
} from 'antd';

const {
    CHECKBOX_REMINDER,
    ICON_LOCK,
    ICON_USER,
    MESSAGE_1,
    PASSWORD,
    PLACEHOLDER_1,
    PLACEHOLDER_2,
    TITLE,
} = SIGNIN_STRINGS;

const FormItem = Form.Item;

const SigninForm = Form.create()(
    class SigninForm extends React.Component {
        render() {
            // eslint-disable-next-line react/prop-types
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
                        <FormItem>
                            {getFieldDecorator("title", {
                                rules: [{ message: { MESSAGE_1 }, required: true }],
                            })(
                                <Input
                                    placeholder= { PLACEHOLDER_1 }
                                    prefix={<Icon type={ICON_USER} />}
                                />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator("description")(
                                <Input
                                    placeholder= {PLACEHOLDER_2}
                                    prefix={<Icon type= {ICON_LOCK} />}
                                    type= {PASSWORD}
                                />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator("remember", {
                                initialValue: true,
                                valuePropName: "checked",
                            })(
                                <Checkbox>{CHECKBOX_REMINDER}</Checkbox>
                            )}
                        </FormItem>
                    </Form>
                </Modal>
            );
        }
    }
);

SigninForm.propTypes = {
    onCancel: PropTypes.func,
    onCreate: PropTypes.func,
    visible: PropTypes.bool,
};

export default SigninForm;
