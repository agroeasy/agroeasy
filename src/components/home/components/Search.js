import React from 'react';
import { Col, Input, Row } from 'antd';

import { SEARCH } from '../constants';

const Search = Input.Search;
const { CENTER, FLEX, LARGE, SEARCH_PRODUCTS } = SEARCH;

//this is the search component
class SearchItems extends React.Component {
    render() {
        return (
            <Row type={FLEX} justify={CENTER}>
                <Col span={11}>
                    <Search placeholder={SEARCH_PRODUCTS} size={LARGE} enterButton />
                </Col>
            </Row>
        );
    }
}

export default SearchItems;
