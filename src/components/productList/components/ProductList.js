import React from 'react';
import { List } from 'antd';
import PropTypes from 'prop-types';

import Product from './Product';
import CarouselImages from '../../productList/components/Carousel';

import { PRODUCT_LIST_CLASSNAME } from '../constants';

// React Component used to render the list of product items

class ProductList extends React.Component {

    state = {
        productList: [],
    }

    async componentDidMount() {
        const response = await fetch('/product/productsWithRelatedProducers', { method: 'post' });
        const json = await response.json();

        this.setState({ productList: json.data });
    } 

    render() {
        const { productList } = this.state;
        const { path } = this.props;
        return(
            <React.Fragment>
                { path !== '/home' && <CarouselImages /> } 
                <List
                    bordered
                    className={PRODUCT_LIST_CLASSNAME}
                    dataSource={productList}
                    loading={productList.length <= 0 && true}
                    pagination={{ pageSize:12 }}
                    grid={{ gutter: 9, lg: 3, md: 3, sm: 2, xs: 1, xxl: 3 }}
                    renderItem={item => (
                        <List.Item>
                            <Product data={item} />
                        </List.Item>
                    )}
                />
            </React.Fragment>

        );
    }
}

ProductList.propTypes = {
    path: PropTypes.string,
};

export default ProductList;
