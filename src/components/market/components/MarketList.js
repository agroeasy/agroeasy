import React from 'react';
import { List } from 'antd';
import PropTypes from 'prop-types';

import Market from './Market';
import CarouselImages from './Carousel';
import { EXAMPLE_PRODUCTS, PRODUCT_LIST_CLASSNAME } from '../constants';

// React Component used to render the list of market items
class MarketList extends React.Component {
    state = {
        productList: [],
    };

    async componentDidMount() {
        const response = await fetch('/product/productsWithRealtedProducers', { method: 'post' });
        const json = await response.json();

        this.setState({ productList: json.data });
        console.log(productList);
    }

    render() {
        const { productList } = this.state;
        return (
            <React.Fragment>
                <CarouselImages />
                <List
                    bordered
                    className={PRODUCT_LIST_CLASSNAME}
                    dataSource={productList}
                    grid={{ gutter: 12, lg: 4, md: 4, sm: 2, xs: 1, xxl: 3 }}
                    renderItem={item => (
                        <List.Item>
                            <Market data={item} />
                        </List.Item>
                    )}
                />
            </React.Fragment>
        );
    }
}

MarketList.propTypes = {
    path: PropTypes.string,
};

export default MarketList;
