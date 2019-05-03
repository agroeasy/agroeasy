import React from 'react';
import { Col, Row } from 'antd';

import Search from './Search';
import CarouselImages from './Carousel';

import productList from '../../productList';
import { HOME_STRINGS } from '../constants';

const { ProductList } = productList.components;
const { BG_IMG, SEARCH, SM_IMG, WELCOME_TEXT_1, WELCOME_TEXT_2, WELCOME_TEXT_3 } = HOME_STRINGS;

//this is the home page, containing sub-components ( Navibar, ListItems and Foot components)
class Home extends React.Component {
    render() {
        return (
            <div>
                <div className={BG_IMG}>
                    <Row>
                        <Col>
                            <div className={SM_IMG}>
                                <h1>{WELCOME_TEXT_1}</h1>
                                <h4>{WELCOME_TEXT_2}</h4>
                                <h5>{WELCOME_TEXT_3}</h5>
                            </div>
                            <div className={SEARCH}>
                                <Search />
                            </div>
                        </Col>
                    </Row>
                </div>
                <CarouselImages />
                <ProductList />
            </div>
        );
    }
}

export default Home;
