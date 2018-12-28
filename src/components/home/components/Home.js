import React from 'react';
import { Col, message, Row } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Search from './Search';
import { components } from '../../productList';
import { HOME_STRINGS } from '../constants';

const { ProductList } = components;
const { BG_IMG, SEARCH, SM_IMG, WELCOME_TEXT_1, WELCOME_TEXT_2, WELCOME_TEXT_3 } = HOME_STRINGS;

//this is the home page, containing sub-components ( Navibar, ListItems and Foot components)
class Home extends React.Component {
    render() {
        const { signupState } = this.props;
        const { data } = signupState;
        return (
            <div>
                <div className={BG_IMG}>
                    <div >

                        {
                            data.success !== undefined &&
                            <span>
                                {
                                    data.success ? message.success(data.message, 5) :
                                        message.error(data.message, 5)
                                }
                            </span>
                        }
                    </div>
                    <Row>
                        <Col >
                            <div className={SM_IMG}>
                                <h1>{WELCOME_TEXT_1}</h1>
                                <h4>{WELCOME_TEXT_2}</h4>
                                <h5>{WELCOME_TEXT_3}</h5>
                            </div>
                            <div className={SEARCH}><Search /></div>
                        </Col>
                    </Row>
                </div>
                <ProductList />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    signupState: state.signup,
});

Home.propTypes = {
    signupState: PropTypes.object,
};

export default connect(mapStateToProps)(Home);
