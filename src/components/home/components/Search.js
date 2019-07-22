import React from 'react';
import  { Col, Input, Row, Select } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { SEARCH } from '../constants';
import * as searchActions from '../actions';
import { getSearchProducts } from '../selectors';

const { Option } = Select;
const Search = Input.Search;
const InputGroup = Input.Group;
const { CENTER, FLEX, LARGE, SEARCH_PRODUCTS } = SEARCH;

//TODO: move search component to App component.

//this is the search component
class SearchItems extends React.Component {
    state = {
        selectedTerm: 'description',
    }

    handleChange = value => {
        this.setState({ selectedTerm:value });
    }

    render() {

        const { actions: { searchQuery } } = this.props;

        return(
            <Row type={FLEX} justify={CENTER}>
                <Col span={11}>
                    <InputGroup size={LARGE} compact>
                        <Select
                            className= 'select-category'
                            placeholder="Select Category"
                            onChange={value => this.handleChange(value)}
                        >
                            <Option value="name">{'Product Name'}</Option>
                            <Option value="quantity">{'Quantity'}</Option>
                            <Option value="cost">{'Cost'}</Option>
                            <Option value="type">{'Type'}</Option>
                            <Option value="description">{'Description'}</Option>
                        </Select>
                        <Search style={{ width: '70%' }}  placeholder={SEARCH_PRODUCTS}
                            onSearch={value => searchQuery(
                                { searchTerm: this.state.selectedTerm, value }
                            )}
                        />
                    </InputGroup>
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
