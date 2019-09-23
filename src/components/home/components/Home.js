import React from 'react';
import { Col, Row } from 'antd';

import productList from '../../productList';
import Banner2 from '../../app/components/banner2';
import { HOME_STRINGS } from '../constants';

const { ProductList } = productList.components;
const { BG_IMG } = HOME_STRINGS;

//this is the home page, containing sub-components ( Navibar, ListItems and Foot components)
class Home extends React.Component {
    render() {
        return (
            <div>
                <div className={BG_IMG}></div>
                <Banner2 />
                <ProductList path={'/home'} />
            </div>
        );
    }
}

export default Home;
