import PropTypes from 'prop-types';
import React from 'react';
import { Col, Row } from 'antd';

import AppFoot from './Footer';
import Navibar from './Navibar';
import Search from './Search';
import { components } from '../../listItems';
import { HOME_STRINGS } from './constants';

const { ListItems } = components;
const { BG_IMG, SEARCH, SM_IMG, WELCOME_TEXT_1, WELCOME_TEXT_2, WELCOME_TEXT_3 } = HOME_STRINGS;

//this is the home page, containing sub-components ( Navibar, ListItems and Foot components)
class Home extends React.Component {
    render() {
        return (
            <div>
                <div className={BG_IMG}>
                    <Navibar />
                    <Row>
                        <Col className={SM_IMG}>
                            <h1>{WELCOME_TEXT_1}</h1>
                            <h4>{WELCOME_TEXT_2}</h4>
                            <h5>{WELCOME_TEXT_3}</h5>
                        </Col>
                        <Col className={SEARCH}>
                            <Search />
                        </Col>
                    </Row>
                </div>
                <ListItems />
                <AppFoot />
            </div>
        );
    }
}

Home.propTypes = {
    className: PropTypes.string,
    headings: PropTypes.string
};
export default Home;
