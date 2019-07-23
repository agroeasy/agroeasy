import React, { Component } from 'react';
import { Table, Badge, Button, Popconfirm, Icon } from 'antd';

const data = [
    {
        id: '1',
        image: '/rice.jpg',
        price: 32,
        product: 'Yellow Corn',
        quantity: 2,
    },
    {
        id: '2',
        image: '/rice.jpg',
        price: 400,
        product: 'Beans',
        quantity: 5,
    },
    {
        id: '3',
        image: '/rice.jpg',
        price: 32,
        product: 'Banana',
        quantity: 1,
    },
];

class Cart extends Component {
    state = {
        cart: [],
        cartCount: 0,
        totalAmount: 0,
    };

    componentDidMount() {
        let total = 0;
        const newCart = [...data];
        newCart.some(entry => {
            total += entry.price * entry.quantity;
        });
        const count = 0;
        this.setState({
            cart: data,
            cartCount: count,
            totalAmount: total,
        });
    }

    handleRemoveRow(row) {
        let total = 0;
        const newCart = [...this.state.cart];
        const index = newCart.findIndex(item => row.id === item.id);
        newCart.splice(index, 1);
        newCart.some(entry => {
            total += entry.price * entry.quantity;
        });
        this.setState({
            cart: newCart,
            cartCount: newCart.length,
            totalAmount: total,
        });
    }

    handleQuantityChange(row, action) {
        let total = 0;
        const newCart = [...this.state.cart];
        const index = newCart.findIndex(item => row.id === item.id);
        if (action === 'add') {
            newCart[index] = {
                ...newCart[index],
                quantity: newCart[index].quantity + 1,
            };
        } else {
            newCart[index] = {
                ...newCart[index],
                quantity:
                    newCart[index].quantity > 1
                        ? newCart[index].quantity - 1
                        : newCart[index].quantity,
            };
        }
        newCart.some(entry => {
            total += entry.price * entry.quantity;
        });
        this.setState({
            cart: newCart,
            cartCount: newCart.length,
            totalAmount: total,
        });
    }

    handleClearCart() {
        this.setState({
            cart: [],
            cartCount: 0,
            totalAmount: 0,
        });
    }

    handleClickRoute = destination => {
        this.props.history.push(`/${destination}`);
    };

    render() {
        return (
            <div className="cart-page">
                <div className="cart-top">
                    <div className="cart-heading">
                        <h2>
                            {`Cart`}
                            <Badge
                                count={this.state.cartCount}
                                title={`${this.state.cartCount} item${
                                    this.state.cartCount > 1 ? 's' : ''
                                }`}
                                style={{ backgroundColor: '#001529' }}
                            />
                        </h2>
                    </div>

                    <div className="cart-clear">
                        <Popconfirm
                            title="Are you sure you want to remove item?"
                            onConfirm={() => this.handleClearCart()}
                        >
                            <Button type="danger">{'Clear Cart'}</Button>
                        </Popconfirm>
                    </div>
                </div>

                <div className="cart-top">
                    <div className="cart-heading">
                        <Button type="dashed" onClick={() => this.handleClickRoute('market')}>
                            {'Continue Shopping'}
                        </Button>
                    </div>
                    <div className="cart-checkout">
                        <Button type="primary" onClick={() => this.handleClickRoute('checkout')}>
                            {'Cheackout'}
                        </Button>
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
                                            <Icon
                                                type="caret-up"
                                                title="Add"
                                                onClick={() =>
                                                    this.handleQuantityChange(record, 'add')
                                                }
                                            />
                                            <Icon
                                                type="caret-down"
                                                title="Reduce"
                                                onClick={() =>
                                                    this.handleQuantityChange(record, 'sub')
                                                }
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
                                        onConfirm={() => this.handleRemoveRow(record)}
                                    >
                                        <a href="javascript:;" className="danger">{`Remove`}</a>
                                    </Popconfirm>
                                ),
                                title: 'Action',
                            },
                        ]}
                        dataSource={this.state.cart}
                        rowKey={record => record.id}
                    />
                </div>
            </div>
        );
    }
}

export default Cart;
// const dataSource = [
//     {
//         key: '1',
//         name: 'Mike',
//         age: 32,
//         address: '10 Downing Street',
//     },
//     {
//         key: '2',
//         name: 'John',
//         age: 42,
//         address: '10 Downing Street',
//     },
// ];

// const columns = [
//     {
//         title: 'Name',
//         dataIndex: 'name',
//         key: 'name',
//     },
//     {
//         title: 'Age',
//         dataIndex: 'age',
//         key: 'age',
//     },
//     {
//         title: 'Address',
//         dataIndex: 'address',
//         key: 'address',
//     },
// ];
// export default class Cart extends Component {
//     render() {
//         return <Table dataSource={dataSource} columns={columns} />;
//     }
// }
