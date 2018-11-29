import React, { Component } from 'react';
import './style.css';

import { 
    Button,
    Checkbox,
    Form,
    Icon,
    Input,
    Modal,
    Tooltip
} from 'antd';

import {
    AGREEMENT,
    CIRCLE,
    CLASSNAME_AGREEMENT,
    CLASSNAME_FORM,
    CLASSNAME_SCROLLBAR,
    CLASSNAME_SIGNUP,
    EMAIL,
    ICON,
    MESSAGE_1,
    MESSAGE_2,
    MESSAGE_3,
    MESSAGE_4,
    MESSAGE_5,
    MESSAGE_6,
    MESSAGE_7,
    MESSAGE_8,
    MESSAGE_9,
    LABEL_1,
    LABEL_2,
    LABEL_3,
    LABEL_4,
    LABEL_5,
    PASSWORD,
    PRIMARY,
    READ,
    SUBMIT,
    TITLE,
    VERTICLE
} from './constant';

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
                    onCancel={onCancel}
                    onOk={onCreate}
                    className= {CLASSNAME_SCROLLBAR}
                >
                    <Form 
                        layout={VERTICLE}
                        className={CLASSNAME_FORM}
                    >
                        <FormItem
                            {...formItemLayout}
                            label={LABEL_1}
                        >
                            {getFieldDecorator("email", {
                                rules: [{
                                    message: { MESSAGE_1 }, type: { EMAIL },
                                }, {
                                    message: { MESSAGE_2 }, required: true,
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
                                rules: [{ message: { MESSAGE_3 }, required: true }],
                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem 
                            {...formItemLayout}
                            label={LABEL_3}
                        >
                            {getFieldDecorator("lastname", {
                                rules: [{ message: { MESSAGE_4 }, required: true }],
                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label={(
                                <span>Username&nbsp;<Tooltip title={MESSAGE_5}>
                                    <Icon type={ICON} />
                                </Tooltip>
                                </span>
                            )}
                        >
                            {getFieldDecorator("username", {
                                rules: [{ message: { MESSAGE_6 }, required: true  }],
                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label={LABEL_4}
                        >
                            {getFieldDecorator("title", {
                                rules: [{ message: { MESSAGE_7 }, required: true }],
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
                                    message: { MESSAGE_8 }, required: true,
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
                                    message: { MESSAGE_9 }, required: true,
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
                        <FormItem>
                            <Button
                                type={PRIMARY}
                                htmlType={SUBMIT}
                                shape={CIRCLE}
                                className={CLASSNAME_SIGNUP}
                            > 
                                {TITLE}
                            </Button>
                        </FormItem>
                    </Form>
                </Modal>
            );
        }
    }
);

export default class Signup extends Component {
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
      form.validateFields(err => {
          if (err) {
              return;
          }

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
              <h6 type={PRIMARY} onClick={this.showModal}>{TITLE}</h6>
              <SignupForm
                  wrappedComponentRef={this.saveFormRef}
                  visible={this.state.visible}
                  onCancel={this.handleCancel}
                  onCreate={this.handleCreate}
              />
          </div>
      );
  }
}
