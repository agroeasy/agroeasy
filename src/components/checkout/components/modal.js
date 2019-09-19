import React from 'react';
import { Button, Modal, Form, Input } from 'antd';
import { BUTTON_TYPE1, BUTTON_WORD1 } from '../constants';

const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
    class extends React.Component {
        render() {
            const { visible, onCancel, onCreate, form } = this.props;
            const { getFieldDecorator } = form;
            return (
                <Modal
                    visible={visible}
                    title="Add Shipping Address"
                    okText="Add"
                    onCancel={onCancel}
                    onOk={onCreate}
                >
                    <Form layout="vertical">
                        <Form.Item label="Full Name">
                            {getFieldDecorator('Full Name', {
                                rules: [
                                    {
                                        message: 'Please input your full name',
                                        required: true,
                                    },
                                ],
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item label="Company Name">
                            {getFieldDecorator('Company Name', {
                                rules: [
                                    {
                                        message: 'Please input your conpany name',
                                        required: true,
                                    },
                                ],
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item label="Street">
                            {getFieldDecorator('street', {
                                rules: [
                                    {
                                        message: 'Please input your street name',
                                        required: true,
                                    },
                                ],
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item label="City">
                            {getFieldDecorator('city', {
                                rules: [
                                    {
                                        message: 'Please input city name',
                                        required: true,
                                    },
                                ],
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item label="State">
                            {getFieldDecorator('state', {
                                rules: [
                                    {
                                        message: 'Please input your state name',
                                        required: true,
                                    },
                                ],
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item className="collection-create-form_last-form-item">
                            {getFieldDecorator('modifier', {
                                initialValue: 'public',
                            })}
                        </Form.Item>
                        <Form.Item label="Country">
                            {getFieldDecorator('country', {
                                rules: [
                                    {
                                        message: 'Please input your country name',
                                        required: true,
                                    },
                                ],
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item label="Mobile Number">
                            {getFieldDecorator('mobile', {
                                rules: [
                                    {
                                        message: 'Please input your mobile number',
                                        required: true,
                                    },
                                ],
                            })(<Input />)}
                        </Form.Item>
                    </Form>
                </Modal>
            );
        }
    },
);

class ModalButton extends React.Component {
    state = {
        visible: false,
    };

    showModal = () => {
        this.setState({ visible: true });
    };

    handleCancel = () => {
        this.setState({ visible: false });
    };

    handleCreate = () => {
        const { form } = this.formRef.props;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }
            form.resetFields();
            this.setState({ visible: false });
        });
    };

    saveFormRef = formRef => {
        this.formRef = formRef;
    };

    render() {
        return (
            <div>
                <Button type={BUTTON_TYPE1} onClick={this.showModal}>
                    {BUTTON_WORD1}
                </Button>
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

export default ModalButton;
