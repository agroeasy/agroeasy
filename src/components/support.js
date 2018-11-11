import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { SUPPORT_STRINGS, Home } from './constants';
import { Button } from 'evergreen-ui';

const { h1, pTexts, bottonText, className1, className2, className3 } = SUPPORT_STRINGS;
//this component will contain imformation about the developter
export default class About extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col className={className1}>
                        <h1 className={className2}>{h1}</h1>
                        <p className={className3}>
                            <i>{pTexts}</i>
                        </p>
                        <p className={className3}>
                            <Link to={Home}>
                                <Button appearance="primary">{bottonText}</Button>
                            </Link>
                        </p>
                    </Col>
                </Row>
            </Container>
        );
    }
}
