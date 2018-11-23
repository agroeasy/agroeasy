import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Row } from 'antd';
import { Home, SUPPORT_STRINGS } from './constants';

const { bottonText, center, danger, display, flex, lead, h1, pTexts, small, support } = SUPPORT_STRINGS;
//this component will contain imformation about the developter
export default class About extends Component {
    render() {
        return (
            <Row type={flex} justify={center}>
                <Col className={support}>
                    <h1 className={display}>{h1}</h1>
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
        );
    }
}
