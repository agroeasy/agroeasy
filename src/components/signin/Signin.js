import React, { Component } from 'react';
import './style.css';
import Signup from '../signup/Signup';
import { 
  Button,
  Modal,
  Form,
  Input,
  Icon,
  Checkbox
} from 'antd';

import {
  Create_Account,
  Title,
  No_Account,
  Reminder,
  Forgot_Pass
} from './constant';


const FormItem = Form.Item;

const CollectionCreateForm = Form.create()(
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title={Title}
          okText="Create"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">

              <FormItem>
                {getFieldDecorator('title', {
                  rules: [{ required: true, message: 'You have to input your username' }],
                })(
                  <Input
                      placeholder="Enter your username"
                      prefix={<Icon type="user"/>}
                  />
                )}
              </FormItem>

              <FormItem>
                {getFieldDecorator('description')(<Input
                             placeholder="Enter your password"
                             prefix={<Icon type="lock"/>}
                             type="password"
                         />)}
              </FormItem>

              <FormItem>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(
                  <Checkbox>{Reminder}</Checkbox>
                )}

                <a className="login-form-forgot" href="">{Forgot_Pass}</a>

                <Button 
                type="primary" 
                htmlType="submit" 
                shape="circle" 
                className="login-form-button">
                  {Title}
                </Button>

                <p className="account">{No_Account}</p>

                <a href={<Signup/>}>{Create_Account}</a>

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

      console.log('Received values of form: ', values);
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
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}
