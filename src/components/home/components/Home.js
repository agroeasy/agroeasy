import React from 'react';
import { Col, message, Row } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Search from './Search';
import { components } from '../../productList';
import { HOME_STRINGS } from '../constants';
import  selectors  from '../../signin';

const { ProductList } = components;
const { BG_IMG, SEARCH, SM_IMG, WELCOME_TEXT_1, WELCOME_TEXT_2, WELCOME_TEXT_3 } = HOME_STRINGS;

//this is the home page, containing sub-components ( Navibar, ListItems and Foot components)
class Home extends React.Component {
    render() {
        /* let { data } = this.props.signupState; 
        data ? data : { data } = this.props.signinState; */
        const { signinStatus } = this.props;
        return (
            <div>
                <div className={BG_IMG}>
                    <div >

                        {
                            signinStatus !== undefined &&
                            <span>
                                {
                                    signinStatus ? message.success("signinMessage valid", 5) :
                                        message.error("signinMessage inavalid", 5)
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
    signinStatus: selectors.getStatus(state),
});

Home.propTypes = {
    signinStatus: PropTypes.object,
};

export default connect(mapStateToProps)(Home);
