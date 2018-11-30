import React from 'react';
import PropTypes from 'prop-types';
import { SIGNUP_STRINGS } from './constants';

import { 
    Checkbox,
    Form,
    Icon,
    Input,
    Modal,
    Tooltip
} from 'antd';

const {
    AGREEMENT,
    CLASSNAME_AGREEMENT,
    CLASSNAME_FORM,
    CLASSNAME_SCROLLBAR,
    EMAIL,
    ICON,
    LABEL_1,
    LABEL_2,
    LABEL_3,
    LABEL_4,
    LABEL_5,
    MESSAGE_1,
    MESSAGE_2,
    MESSAGE_3,
    MESSAGE_4,
    MESSAGE_5,
    MESSAGE_6,
    MESSAGE_7,
    MESSAGE_8,
    MESSAGE_9,
    PASSWORD,
    READ,
    TITLE,
    USERNAME,
    VERTICLE,
} = SIGNUP_STRINGS;

const FormItem = Form.Item;

const SignupForm = Form.create()(
    class SignupForm extends React.Component {
        render() {
            const { form, onCancel, onCreate, visible } = this.props;
            const { getFieldDecorator } = form;

            const formItemLayout = {
                labelCol: {
                    sm: { span: 8 },
                    xs: { span: 20 },
                },
                wrapperCol: {
                    sm: { span: 16 },
                    xs: { span: 20 },
                },
            };
      
            return (
                <Modal
                    visible={visible}
                    title={TITLE}
                    okText={TITLE}
                    onCancel={onCancel}
                    onOk={onCreate}
                    className= {CLASSNAME_SCROLLBAR}
                >
                    <Form 
                        className={CLASSNAME_FORM}
                    >
                        <FormItem
                            {...formItemLayout}
                            label={LABEL_1}
                        >
                            {getFieldDecorator("email", {
                                rules: [{
                                    message: MESSAGE_1, type: EMAIL,
                                }, {
                                    message: MESSAGE_2, required: true,
                                }],
                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem 
                            {...formItemLayout}
                            label={LABEL_2}
                        > 
                            {getFieldDecorator("firstname", {
                                rules: [{ message: MESSAGE_3, required: true }],
                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem 
                            {...formItemLayout}
                            label={LABEL_3}
                        >
                            {getFieldDecorator("lastname", {
                                rules: [{ message: MESSAGE_4, required: true }],
                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label={(
                                <span>
                                    {USERNAME}&nbsp;<Tooltip title={MESSAGE_5}>
                                        <Icon type={ICON} />
                                    </Tooltip>
                                </span>
                            )}
                        >
                            {getFieldDecorator("username", {
                                rules: [{ message: MESSAGE_6, required: true  }],
                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label={LABEL_4}
                        >
                            {getFieldDecorator("title", {
                                rules: [{ message: MESSAGE_7, required: true }],
                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label={PASSWORD}
                        >
                            {getFieldDecorator("password", {
                                rules: [{
                                    message: MESSAGE_8, required: true,
                                }, {
                                    validator: this.validateToNextPassword,
                                }],
                            })(
                                <Input type={PASSWORD} />
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label= {LABEL_5}
                        >
                            {getFieldDecorator("confirm", {
                                rules: [{
                                    message: MESSAGE_9, required: true,
                                }, {
                                    validator: this.compareToFirstPassword,
                                }],
                            })(
                                <Input type={PASSWORD} onBlur={this.handleConfirmBlur} />
                            )}
                        </FormItem>
                        <FormItem 
                            className={CLASSNAME_AGREEMENT}
                        >
                            {getFieldDecorator("agreement", {
                                valuePropName: "checked",
                            })(
                                <Checkbox>
                                    {READ} 
                                    <a href="">
                                        {AGREEMENT}
                                    </a>
                                </Checkbox>
                            )}
                        </FormItem>
                    </Form>
                </Modal>
            );
        }
    }
);

SignupForm.propTypes = {
    onCancel: PropTypes.func,
    onCreate: PropTypes.func,
    visible: PropTypes.bool,
};

export default SignupForm;
