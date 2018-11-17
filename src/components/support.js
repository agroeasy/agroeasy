import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'antd';
import { SUPPORT_STRINGS, Home } from './constants';

const { h1, pTexts, bottonText, support, className2, lead, 
    center, flex, small, danger
} = SUPPORT_STRINGS;
//this component will contain imformation about the developter
export default class About extends Component {
    render() {
        return (
            <div>
                <Row type={flex} justify={center}>
                    <Col className={support}>
                        <h1 className={className2}>{h1}</h1>
                        <p className={lead}>
                            <i>{pTexts}</i>
                        </p>
                        <p className={lead}>
                            <Link to={Home}>
                                <Button size={small} type={danger}>{bottonText}</Button>
                            </Link>
                        </p>
                    </Col>
                </Row>
            </div>
        );
    }
}
