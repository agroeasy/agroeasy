import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import AppFoot from './Footer';
import Navibar from './Navibar';
import ListItems from './ListItems';
import SearchItems from './Search';
import { HOME_STRINGS } from './constants';

const { BG_IMG, h1Text, h4Text, pText, search, SM_IMG } = HOME_STRINGS;
//this is the home page, containing sub-components ( Navibar, ListItems and Foot components)
class Home extends React.Component {
    render() {
        return (
            <div>
                <div className={BG_IMG}>
                    <Navibar />
                    <Row>
                        <Col className={SM_IMG}>
                            <h1>{h1Text}</h1>
                            <h4>{h4Text}</h4>
                            <h5>{pText}</h5>
                        </Col>
                        <Col className={search}>
                            <SearchItems />
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
