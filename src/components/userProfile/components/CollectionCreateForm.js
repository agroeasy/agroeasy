import React from 'react';
import { Modal, Form, Input } from 'antd';
// const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
// eslint-disable-next-line
export class CollectionCreateForm extends React.Component {
    render() {
        const { visible, onCancel, onCreate, form } = this.props;
        const { getFieldDecorator } = form;
        return (<Modal visible={visible} width="70%" title="Edit User Information" okText="Ok" onCancel={onCancel} onOk={onCreate}>
            <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }}>
                <Form.Item label="Title">
                    {getFieldDecorator('title', {
                        rules: [{ required: true, message: 'Please input the title of collection!' }],
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="Description">
                    {getFieldDecorator('description')(<Input type="textarea" />)}
                </Form.Item>
            </Form>
        </Modal>);
    }
}
