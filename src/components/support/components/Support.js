import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Row } from 'antd';

import { HOME, SUPPORT_STRINGS } from './constants';

const {
    BOTTON_TEXT,
    CENTER,
    DANGER,
    DISPLAY,
    DISPLAY_TEXT,
    FLEX,
    LEAD, LEAD_TEXT, SMALL, SUPPORT,
} = SUPPORT_STRINGS;

//this component will contain imformation about the developter
export default class About extends React.Component {
    render() {
        return (
            <Row type={FLEX} justify={CENTER}>
                <Col className={SUPPORT}>
                    <h1 className={DISPLAY}>{DISPLAY_TEXT}</h1>
                    <p className={LEAD}><i>{LEAD_TEXT}</i></p>
                    <p className={LEAD}>
                        <Link to={HOME}>
                            <Button size={SMALL} type={DANGER}>{BOTTON_TEXT}</Button>
                        </Link>
                    </p>
                </Col>
            </Row>
        );
    }
}
