// import React from 'react';
// import { Button, Form } from 'antd';
// import { TextInputField } from 'evergreen-ui';
// import './style.css';
// import { Title, Have_Account, Required, Create_Account, Sign_in } from './constant';

// export default class Signup extends React.Component {
//     render() {
//         return (
        
//             <Form      
//                 className="form">
//                 <div>                  
//                     <img src="./images/AgroeasyLogo.png" alt="logo" className="logo"/>
//                     <div className="header">{Title}</div>
//                     <div className="asterik">{Required}</div>
            
//                     <TextInputField
//                         tabIndex={0}
//                         required
//                         appearance="neutral"
//                         type="name"
//                         label="First name"
//                         inputHeight={38}
//                         inputWidth={300}
//                     />
                            
//                     <TextInputField
//                         tabIndex={1}
//                         required
//                         appearance="neutral"
//                         type="name"
//                         label="Last name"
//                         inputHeight={38}
//                         inputWidth={300}
//                     />  
//                     <TextInputField
//                         tabIndex={2}
//                         required
//                         appearance="neutral"
//                         type="name"
//                         label="Location"
//                         inputHeight={38}
//                         inputWidth={300}
//                     />               
//                     <TextInputField
//                         tabIndex={3}
//                         required
//                         appearance="neutral"
//                         type="email"
//                         label="Email address"
//                         inputHeight={38}
//                         inputWidth={300}
//                     />         
//                     <TextInputField
//                         tabIndex={4}
//                         required
//                         appearance="neutral"
//                         type="password"
//                         label="Password"
//                         inputHeight={38}
//                         inputWidth={300}
//                     />              
                   
//                     <Button
//                         className="green-button">
//                         {Create_Account}
//                     </Button>
                
//                     <div className="account">{Have_Account}</div>

//                     <Button
//                         className="default_button"
//                         a href='../signin'>
//                         {Sign_in}
//                     </Button>
                
//                 </div>
          
//             </Form>

//         );

//     }
// }


import React, { Component } from 'react';
import { Button, Modal, Form, Input, Tooltip, Icon, Checkbox } from 'antd';
import { Title, Have_Account, Login, Read, Agreement } from './constant';
import Signin from '../signin/Signin';
import './style.css';

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
          okText="Create"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="verticle" className="signup_form">

            <FormItem
            {...formItemLayout}
            label="E-mail"
            >
                {getFieldDecorator('email', {
                    rules: [{
                    type: 'email', message: 'The input is not valid E-mail!',
                    }, {
                    required: true, message: 'Please input your E-mail!',
                    }],
                })(
                    <Input />
                )}
            </FormItem>

            <FormItem 
            {...formItemLayout}
            label="First name"
            >
              {getFieldDecorator('title', {
                rules: [{ required: true, message: 'Please input your first name!' }],
              })(
                <Input />
              )}
            </FormItem>
            <FormItem 
            {...formItemLayout}
            label="Last name"
            >
              {getFieldDecorator('title', {
                rules: [{ required: true, message: 'Please input your last name!' }],
              })(
                <Input />
              )}
            </FormItem>
            <FormItem
                {...formItemLayout}
                label={(
                    <span>
                    Username&nbsp;
                    <Tooltip title="What do you want others to call you?">
                        <Icon type="question-circle-o" />
                    </Tooltip>
                    </span>
                )}
                >
            {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!'}],
            })(
                <Input />
            )}
            </FormItem>
            <FormItem
                {...formItemLayout}
                label="Location"
                >
                {getFieldDecorator('title', {
                rules: [{ required: true, message: 'Please input your location!' }],
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
                    required: true, message: 'Please input your password!',
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
                    required: true, message: 'Please confirm your password!',
                    }, {
                    validator: this.compareToFirstPassword,
                    }],
                })(
                    <Input type="password" onBlur={this.handleConfirmBlur} />
                )}
            </FormItem>
            <FormItem className="agreement_quote">
                {getFieldDecorator('agreement', {
                    valuePropName: 'checked',
                })(
                    <Checkbox>{Read} <a href="">{Agreement}</a></Checkbox>
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

                <a href={<Signin/>}>{Login}</a>

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