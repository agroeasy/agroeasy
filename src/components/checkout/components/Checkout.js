import React from 'react';
import { Button, Table } from 'antd';
import Modal from './modal';
import {
    BUTTON_TYPE,
    BUTTON_WORD,
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

class Checkout extends React.Component {
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
                            <Modal />
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
