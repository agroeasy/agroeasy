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
  Create_Account,
  Forgot_Pass,
  Message_1,
  No_Account,
  Placeholder_1,
  Placeholder_2,
  Reminder,
  Title
} from './constant';

const FormItem = Form.Item;

const SigninForm = Form.create()(
  class extends React.Component {
    render() {

      const {form, visible, onCancel, onCreate } = this.props;
      const { getFieldDecorator } = form;

      return (
        <Modal
          visible={visible}
          title={Title}
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form 
            layout="vertical"
          >
              <FormItem>
                {getFieldDecorator('title', {
                  rules: [{ required: true, message: { Message_1 } }],
                })(
                  <Input
                    placeholder= { Placeholder_1 }
                    prefix={<Icon type="user"/>}
                  />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('description')
                  (<Input
                    placeholder= {Placeholder_2}
                    prefix={<Icon type="lock"/>}
                    type="password"
                    />
                )}
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
                  className="login-form-button"
                >
                    {Title}
                </Button>

                <p className="account">{No_Account}</p>

                <a href="">{Create_Account}</a>

              </FormItem>
          </Form>
        </Modal>
      );
    }
  }
);

export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
        visible: false
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
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      form.resetFields();
      this.setState({ visible: true });
    });
  }

  saveFormRef = (formRef) => {
    this.formRef = formRef;
  }

  render() {
    return (
      <div>
        <h6 type="primary" onClick={this.showModal}>{Title}</h6>
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
