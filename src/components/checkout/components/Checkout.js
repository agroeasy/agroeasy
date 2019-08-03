import React from 'react';
import { Button } from 'antd';
import {
    TABLE,
    ITEM_A,
    QUANTITY_A,
    PRICE_A,
    BUTTON_TYPE,
    BUTTON_TYPE1,
    BUTTON_WORD,
    BUTTON_WORD1,
    TOTAL_W,
    TOTAL_A,
    INFORMATION,
    INFO,
    CHECKOUT_INFO,
    ADDRESS,
    TOTALS,
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

const items = CHECKOUT_INFO.map(({ product, photo, price, total, quantity }) => (
    <tr>
        <td>
            <img src={photo} className="image"></img>
            <br />
            {product}
        </td>
        <td>{quantity}</td>
        <td>{price}</td>
        <td>{total}</td>
    </tr>
));

class Checkout extends React.Component {
    render() {
        return (
            <div>
                <div className="header"></div>
                <div className="top_info">{INFO}</div>
                <div className="all">
                    <div className="info_flex">
                        <div className="top_address">
                            <h5>{INFORMATION}</h5>
                            <table>{addresses}</table>
                            <Button type={BUTTON_TYPE1}>{BUTTON_WORD1}</Button>
                        </div>
                        <div>
                            <table className="table">
                                <tr>
                                    <th className="item">{ITEM_A}</th>
                                    <th className="quantity">{QUANTITY_A}</th>
                                    <th className="price">{PRICE_A}</th>
                                    <th className="total">{TOTALS}</th>
                                </tr>
                                {items}
                            </table>
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
