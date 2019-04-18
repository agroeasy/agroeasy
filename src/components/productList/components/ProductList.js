import React from 'react';
import { List, Pagination } from 'antd';

import Product from './Product';
import { EXAMPLE_PRODUCTS, PRODUCT_LIST_CLASSNAME } from '../constants';

// React Component used to render the list of product items
class ProductList extends React.Component {

    state = {
        productList: [],
    }

    async componentDidMount() {
        const response = await fetch('/product/findallwithproduct', { method: 'post' });
        const json = await response.json();

        this.setState({ productList: json.data });
    } 

    //TODO: make dataSource to get values from productList once it has image key

    render() {
        return(
            <List
                bordered
                className={PRODUCT_LIST_CLASSNAME}
                dataSource={this.state.productList}
                loading={!this.state.productList[1] && true}
                pagination={{ pageSize:12 }}
                grid={{ gutter: 12, lg: 4, md: 4, sm: 2, xs: 1, xxl: 3 }}
                renderItem={item => (
                    <List.Item>
                        <Product data={item} />
                    </List.Item>
                )}
            />
        );
    }
}

export default ProductList;
