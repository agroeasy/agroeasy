import React, { Component } from 'react';
import { Col, Row } from 'antd';
import { ROW_ITEMS_4 } from './constants';
import Product from './Product';

/*
this the 4th on component anotherlist.js
The css file is imported from Home.js
*/
export default class Row1 extends Component {
    render() {
        return (
            <div>
                <Row type="flex" justify="center">
                    {
                        ROW_ITEMS_4.map(item =>
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
