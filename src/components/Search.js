import React from 'react';
import  { Col, Input, Row } from 'antd';
import { ListItem_stings } from './constants'; 

const { center, flex, large, searchProducts } = ListItem_stings;
const Search = Input.Search;
//this is the search component
class SearchItems extends React.Component {
    render() {
        return(
            <Row type={flex} justify={center}>
                <Col span={11}>
                    <Search placeholder={searchProducts} size={large} enterButton  />
                </Col>
            </Row>
        );
    }
}

export default SearchItems;
