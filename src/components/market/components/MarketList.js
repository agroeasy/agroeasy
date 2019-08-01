import React from 'react';
import { List } from 'antd';
import PropTypes from 'prop-types';

import Market from './Market';
import CarouselImages from './Carousel';

import { EXAMPLE_PRODUCTS, PRODUCT_LIST_CLASSNAME } from '../constants';

// React Component used to render the list of market items
class MarketList extends React.Component {
    render() {
        return (
            <React.Fragment>
                <CarouselImages />
                <List
                    bordered
                    className={PRODUCT_LIST_CLASSNAME}
                    dataSource={EXAMPLE_PRODUCTS}
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
