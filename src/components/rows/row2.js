import React, { Component } from 'react';
import { Col, Row } from 'antd';
import { ROW_ITEMS_2 } from './constants';
import Product from './Product';

/*
this the 2nd on component anotherlist.js
The css file is imported from Home.js
*/
export default class Row1 extends Component {
    render() {
        return (
            <div>
                <Row justify="center" type="flex">
                    {
                        ROW_ITEMS_2.map(item =>
                            <Col span={5} className="row-Item" key={item.name}>
                                <Product
                                    title={item.name}
                                    pix={item.pix}
                                    tag={item.cost}
                                />
                            </Col>
                        )
                    }
                </Row>
            </div>
        );
    }
}
