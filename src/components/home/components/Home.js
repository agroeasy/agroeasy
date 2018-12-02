import React from 'react';
import { Col, Row } from 'antd';

import AppFoot from './Footer';
import Navibar from './Navibar';
import Search from './Search';
import { components } from '../../productList';
import { HOME_STRINGS } from './constants';

const { ProductList } = components;
const { BG_IMG, SEARCH, SM_IMG, WELCOME_TEXT_1, WELCOME_TEXT_2, WELCOME_TEXT_3 } = HOME_STRINGS;

//this is the home page, containing sub-components ( Navibar, ListItems and Foot components)
class Home extends React.Component {
    render() {
        return (
            <div>
                <Navibar />
                <div className={BG_IMG}>
                    
                    <Row>
                        <Col className={SM_IMG}>
                            <h1>{WELCOME_TEXT_1}</h1>
                            <h4>{WELCOME_TEXT_2}</h4>
                            <h5>{WELCOME_TEXT_3}</h5>
                        </Col>
                        <Col className={SEARCH}><Search /></Col>
                    </Row>
                </div>
                <ProductList />
                <AppFoot />
            </div>
        );
    }
}

export default Home;
