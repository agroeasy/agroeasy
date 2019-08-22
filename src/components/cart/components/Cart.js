import React, { Component } from 'react';
import { Table, Badge, Button, Popconfirm, Icon } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions';
import { getCart } from '../selectors';
import { MARKET } from '../constants';

import { AppLink } from '../../app/components';

class Cart extends Component {
    componentDidMount() {
        const { updateCartList } = this.props.actions;
        updateCartList();
    }

    handleRemove = id => {
        const { removeItem } = this.props.actions;
        const payload = { id };
        removeItem(payload);
    };

    handleQuantityChange = (row, action) => {};

    handleClearCart = () => {
        const { clearCart } = this.props.actions;
        clearCart();
    };

    render() {
        const { cart } = this.props;
        const values = Object.values(cart);

        return (
            <div className="cart-page">
                <div className="cart-top">
                    <h2 className="cart-heading">
                        {`Cart`}
                        <Badge
                            count={values.length}
                            // title={}
                            style={{ backgroundColor: '#001529' }}
                        />
                    </h2>

                    <Popconfirm
                        className="cart-clear"
                        title="Are you sure you want to remove item?"
                        onConfirm={() => this.handleClearCart()}
                    >
                        <Button type="danger">{'Clear Cart'}</Button>
                    </Popconfirm>
                </div>

                <div className="cart-top">
                    <AppLink key={MARKET} to={MARKET}>
                        <Button className="cart-heading">{`Continue Shopping`}</Button>
                    </AppLink>
                    <AppLink key={'checkout'} to={'./'}>
                        <Button className="cart-checkout">{'Checkout'}</Button>
                    </AppLink>
                </div>

                <Table
                    className="cart-table"
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
                                        <Icon
                                            type="caret-up"
                                            title="Add"
                                            onClick={() => this.handleQuantityChange(record, 'add')}
                                        />
                                        <Icon
                                            type="caret-down"
                                            title="Reduce"
                                            onClick={() => this.handleQuantityChange(record, 'sub')}
                                        />
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
                                <Popconfirm
                                    title="Are you sure you want to remove item?"
                                    onConfirm={() => this.handleRemove(record.id)}
                                >
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
