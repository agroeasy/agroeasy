import React from 'react';
import  { Col, Input, Row } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { SEARCH } from '../constants';
import * as searchActions from '../actions';
import { getSearchProducts } from '../selectors';

const Search = Input.Search;
const { CENTER, FLEX, LARGE, SEARCH_PRODUCTS } = SEARCH;

//TODO: move search component to App component.

//this is the search component
class SearchItems extends React.Component {
    render() {

        const { actions: { searchQuery } } = this.props;

        return(
            <Row type={FLEX} justify={CENTER}>
                <Col span={11}>
                    <Search placeholder={SEARCH_PRODUCTS} size={LARGE} enterButton  
                        onSearch={value => searchQuery(value)}
                    />
                </Col>
            </Row>
        );
    }
}

SearchItems.propTypes = {
    actions: PropTypes.object,
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(searchActions, dispatch),
});
const mapStateToProps = state => ({
    searchResults: getSearchProducts(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchItems);
