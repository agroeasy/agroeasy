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
  Agreement,
  Have_Account,
  Message_1,
  Message_2,
  Message_3,
  Message_4,
  Message_5,
  Message_6,
  Message_7,
  Message_8,
  Message_9,
  Label_1,
  Label_2,
  Label_3,
  Login,
  Read,
  Title
} from './constant';

const FormItem = Form.Item;

const SignupForm = Form.create()(
  class extends React.Component {

    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;

      const formItemLayout = {
        labelCol: {
          xs: { span: 20 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 20 },
          sm: { span: 16 },
        },
      };
      
      return (
        <Modal
          visible={visible}
          title={Title}
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form 
            layout="verticle"
            className="signup_form"
          >
            <FormItem
              {...formItemLayout}
              label={Label_1}
            >
              {getFieldDecorator('email', {
                rules: [{
                type: 'email', message: {Message_1},
                }, {
                required: true, message: {Message_2},
                }],
              })(
                <Input />
              )}
            </FormItem>
            <FormItem 
              {...formItemLayout}
              label={Label_2}
            > 
              {getFieldDecorator('firstname', {
                rules: [{ required: true, message: {Message_3} }],
              })(
                <Input />
              )}
            </FormItem>
            <FormItem 
              {...formItemLayout}
              label={Label_3}
            >
              {getFieldDecorator('lastname', {
                rules: [{ required: true, message: {Message_4} }],
              })(
                <Input />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label={(
                <span>
                  Username&nbsp;
                  <Tooltip title={Message_5}>
                    <Icon type="question-circle-o" />
                  </Tooltip>
                </span>
                )}
            >
                {getFieldDecorator('username', {
                  rules: [{ required: true, message: {Message_6}}],
                })(
                  <Input />
                )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="Location"
            >
              {getFieldDecorator('title', {
                rules: [{ required: true, message: {Message_7} }],
              })(
                <Input />
              )}
            </FormItem>
            <FormItem
                {...formItemLayout}
                label="Password"
            >
                {getFieldDecorator('password', {
                  rules: [{
                  required: true, message: {Message_8},
                  }, {
                  validator: this.validateToNextPassword,
                  }],
                })(
                  <Input type="password" />
                )}
            </FormItem>
            <FormItem
                {...formItemLayout}
                label="Confirm Password"
            >
                {getFieldDecorator('confirm', {
                  rules: [{
                  required: true, message: {Message_9},
                  }, {
                  validator: this.compareToFirstPassword,
                  }],
                })(
                  <Input type="password" onBlur={this.handleConfirmBlur} />
                )}
            </FormItem>
            <FormItem 
              className="agreement_quote"
            >
              {getFieldDecorator('agreement', {
                  valuePropName: 'checked',
              })(
                <Checkbox>
                  {Read} 
                  <a href="">
                    {Agreement}
                  </a>
                </Checkbox>
              )}
            </FormItem>
            <FormItem>
              <Button
                type="primary"
                htmlType="submit"
                shape="circle"
                className="signup-form-button"
              > 
                  {Title}
              </Button>

              <p className="account">{Have_Account}</p>

              <a href="">{Login}</a>

            </FormItem>
          </Form>
        </Modal>
      );
    }
  }
);

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
        visible: false
    };

  showModal = () => {
    this.setState({ visible: true });
  }

  handleCancel = () => {
    this.setState({ visible: false });
  }

  handleCreate = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      form.resetFields();
      this.setState({ visible: false });
    });
  }

  saveFormRef = (formRef) => {
    this.formRef = formRef;
  }
 
  render() {
    return (
      <div>
        <h6 type="primary" onClick={this.showModal}>{Title}</h6>
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