import React, { Component } from 'react';
import { Table, Badge, Button, Popconfirm, Icon } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions';
import { getCart } from '../selectors';

class Cart extends Component {
    componentDidMount() {
        const { updateCart } = this.props.actions;
        updateCart();
    }

    render() {
        const { cart } = this.props;
        const values = [...cart.values()];

        return (
            <div className="cart-page">
                <div className="cart-top">
                    <div className="cart-heading">
                        <h2>
                            {`Cart`}
                            <Badge style={{ backgroundColor: '#001529' }} />
                        </h2>
                    </div>

                    <div className="cart-clear">
                        <Popconfirm title="Are you sure you want to remove item?">
                            <Button type="danger">{'Clear Cart'}</Button>
                        </Popconfirm>
                    </div>
                </div>

                <div className="cart-top">
                    <div className="cart-heading">
                        <Button type="dashed">{'Continue Shopping'}</Button>
                    </div>
                    <div className="cart-checkout">
                        <Button type="primary">{'Cheackout'}</Button>
                    </div>
                </div>

                <div className="cart-table">
                    <Table
                        columns={[
                            {
                                className: 'cart-table',
                                dataIndex: 'product',
                                key: 'product',
                                render: (text, record) => (
                                    <div className="product-display">
                                        <img src={record.image} />
                                        <p>{record.product}</p>
                                    </div>
                                ),
                                title: 'Product',
                                width: '25%',
                            },
                            {
                                className: 'cart-table',
                                dataIndex: 'price',
                                key: 'price',
                                title: 'Price',
                            },
                            {
                                className: 'cart-table',
                                dataIndex: 'quantity',
                                key: 'quantity',
                                render: (text, record) => (
                                    <div className="quantity-container">
                                        <div className="quantity-value">{record.quantity}</div>
                                        <div className="quantity-actions">
                                            <Icon type="caret-up" title="Add" />
                                            <Icon type="caret-down" title="Reduce" />
                                        </div>
                                    </div>
                                ),
                                title: 'Quantity',
                            },
                            {
                                className: 'cart-table',
                                dataIndex: 'amount',
                                key: 'amount',
                                render: (text, record) => `${record.price * record.quantity}`,
                                title: 'Amount',
                            },
                            {
                                className: 'cart-table',
                                key: 'action',
                                render: (text, record) => (
                                    <Popconfirm title="Are you sure you want to remove item?">
                                        <a href="javascript:;" className="danger">{`Remove`}</a>
                                    </Popconfirm>
                                ),
                                title: 'Action',
                            },
                        ]}
                        dataSource={values}
                        rowKey={record => record.id}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    cart: getCart(state),
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Cart);
