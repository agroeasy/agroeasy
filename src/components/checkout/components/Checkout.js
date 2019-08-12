import React from 'react';
import { Button, Modal, Form, Input, Table } from 'antd';
import {
    BUTTON_TYPE,
    BUTTON_TYPE1,
    BUTTON_WORD,
    BUTTON_WORD1,
    TOTAL_W,
    TOTAL_A,
    INFORMATION,
    INFO,
    ADDRESS,
} from '../constants';

const addresses = ADDRESS.map(({ name, company, street, city, state, country, number, place }) => (
    <span className="item_t">
        <tr>
            <b>{place}</b>
            <i>{name}</i>
            <i>{company}</i>
            <i>{street}</i>
            <i>{city}</i>
            <i>{state}</i>
            <i>{country}</i>
            <i>{number}</i>
        </tr>
    </span>
));

const columns = [
    {
        dataIndex: 'item',
        key: 'item',
        render: (text, record) => (
            <div className="product-display">
                <img className="image" src={record.image} />
                <p>{record.item}</p>
            </div>
        ),
        title: 'item',
    },
    {
        dataIndex: 'quantity',
        key: 'quantity',
        title: 'quantity',
    },
    {
        dataIndex: 'price',
        key: 'price',
        title: 'price',
    },
    {
        dataIndex: 'total',
        key: 'total',
        title: 'total',
    },
];

const dataSource = [
    {
        image: '/beans.jpg',
        item: 'beans like no other fried and roasted diffrent colors',
        key: '1',
        price: '23,000',
        quantity: '3',
        total: '80,000',
    },
    {
        image: '/ripeBanana.jpg',
        item: 'banana like no other fried and roasted',
        key: '2',
        price: '10,000',
        quantity: '2',
        total: '20,000',
    },
    {
        image: '/yam-market.jpg',
        item: 'yam like no other fried and roasted',
        key: '3',
        price: '10,000',
        quantity: '2',
        total: '20,000',
    },
];

const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
    // eslint-disable-next-line
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

class Checkout extends React.Component {
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
                <div className="header"></div>
                <div className="top_info">{INFO}</div>
                <div className="all">
                    <div className="info_flex">
                        <div className="top_address">
                            <h5 className="information">{INFORMATION}</h5>
                            <table>{addresses}</table>
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
                        </div>
                        <div>
                            <Table dataSource={dataSource} columns={columns} />
                        </div>
                    </div>
                    <div className="p_total">
                        <i>{TOTAL_W}</i>
                        <b>{TOTAL_A}</b>
                    </div>
                    <Button type={BUTTON_TYPE}>{BUTTON_WORD}</Button>
                </div>
            </div>
        );
    }
}

export default Checkout;
