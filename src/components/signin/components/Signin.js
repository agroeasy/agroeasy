import React, { Component } from 'react';
import './style.css';

import { 
    Button,
    Checkbox,
    Form,
    Icon,
    Input,
    Modal
} from 'antd';

import {
    CIRCLE,
    CHECKBOX_REMINDER,
    CLASSNAME_LOGIN,
    ICON_LOCK,
    ICON_USER,
    MESSAGE_1,
    PASSWORD,
    PLACEHOLDER_1,
    PLACEHOLDER_2,
    PRIMARY,    
    SUBMIT,
    TITLE
} from './constant';

const FormItem = Form.Item;

const SigninForm = Form.create()(
    class SigninForm extends React.Component {
        render() {
            const { form, visible, onCancel, onCreate } = this.props;
            const { getFieldDecorator } = form;
            return (
                <Modal
                    visible={visible}
                    title={TITLE}
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

                            <Button 
                                type={PRIMARY} 
                                htmlType={SUBMIT} 
                                shape={CIRCLE} 
                                className={CLASSNAME_LOGIN}
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

export default class Signin extends Component {
  state = {
      visible: false,
  };

  showModal = () => {
      this.setState({
          visible: true });
  }

  handleCancel = () => {
      this.setState({
          visible: false });
  }

  handleCreate = () => {
      const form = this.formRef.props.form;
      form.validateFields(err => {
          if (err) {
              return;
          }

          form.resetFields();
          this.setState({ visible: true });
      });
  }

  saveFormRef = formRef => {
      this.formRef = formRef;
  }

  render() {
      return (
          <div>
              <h6 type={PRIMARY} onClick={this.showModal}>{TITLE}</h6>
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
