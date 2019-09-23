import React from 'react';
import { Col, Input, Row, Select } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { SEARCH, SELECT_OPTIONS, STYLE } from '../constants';
import { searchQuery } from '../actions';
import { getSearchProducts } from '../selectors';

const { CENTER, FLEX, LARGE, SEARCH_PRODUCTS } = SEARCH;
const Option = Select.Option;
const Search = Input.Search;
const InputGroup = Input.Group;

//TODO: move search component to App component.

//this is the search component
class SearchItems extends React.Component {
    state = {
        selectedTerm: 'description',
    };

    handleSearchQuery = value => {
        const { searchQuery } = this.props.actions;
        const { selectedTerm } = this.state;

        searchQuery({ selectedTerm, value });
    };

    handleChange = value => {
        this.setState({ selectedTerm: value });
    };

    render() {
        const generateSelectOptions = SELECT_OPTIONS.map(({ value, label }) => (
            <Option key={value} value={value}>
                {label}
            </Option>
        ));

        return (
            <Row>
                <Col span={11}>
                    <InputGroup size={LARGE} style={{ width: '650px' }} compact>
                        <Select
                            className="select-category"
                            placeholder="Select Category"
                            onChange={value => this.handleChange(value)}
                        >
                            {generateSelectOptions}
                        </Select>

                        <Search
                            style={STYLE}
                            placeholder={SEARCH_PRODUCTS}
                            onSearch={value => this.handleSearchQuery(value)}
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
    actions: bindActionCreators({ searchQuery }, dispatch),
});
const mapStateToProps = state => ({
    searchResults: getSearchProducts(state),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SearchItems);
