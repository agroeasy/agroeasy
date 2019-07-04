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
    CLASS_NAMES,
    CHECKOUT_INFO,
    ADDRESS,
    TOTALS,
} from '../constants';

const {
    ALL,
    IMAGE,
    TOP_INFO,
    ITEM,
    QUANTITY,
    TOTAL,
    ITEM_T,
    PRICE,
    P_TOTAL,
    INFO_FLEX,
    HEADER,
    TOP_ADDRESS,
} = CLASS_NAMES;

const addresses = ADDRESS.map(({ name, company, street, city, state, country, number, place }) => (
    <span className={ITEM_T}>
        <tr>
            <b>{place}</b>
            <br />
            {name}
            <br />
            {company}
            <br />
            {street}
            <br />
            {city}
            <br />
            {state}
            <br />
            {country}
            <br />
            {number}
            <br />
        </tr>
    </span>
));

const items = CHECKOUT_INFO.map(({ product, photo, price, total, quantity }) => (
    <tr>
        <td>
            <img src={photo} className={IMAGE}></img>
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
                <div className={HEADER}></div>
                <div className={TOP_INFO}>{INFO}</div>
                <div className={ALL}>
                    <div className={INFO_FLEX}>
                        <div className={TOP_ADDRESS}>
                            <h5>{INFORMATION}</h5>
                            <table>{addresses}</table>
                            <Button type={BUTTON_TYPE1}>{BUTTON_WORD1}</Button>
                        </div>
                        <div>
                            <table className={TABLE}>
                                <tr>
                                    <th className={ITEM}>{ITEM_A}</th>
                                    <th className={QUANTITY}>{QUANTITY_A}</th>
                                    <th className={PRICE}>{PRICE_A}</th>
                                    <th className={TOTAL}>{TOTALS}</th>
                                </tr>
                                {items}
                            </table>
                        </div>
                    </div>
                    <div className={P_TOTAL}>
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
