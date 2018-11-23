import PropTypes from 'prop-types';
import React from 'react';
import { Layout } from 'antd';

import { components } from '../../rows';
import { LIST_ITEMS } from './constants';

const { Row1, Row2, Row3, Row4 } = components;
const { ROW_ITEMS } = LIST_ITEMS;

//contains components SearchItems, ProductsLocation and Rows
class ListItems extends React.Component {
    render() {
        return(
            <Layout className={ROW_ITEMS}>
                <Row1 />
                <Row2 />
                <Row3 />
                <Row4 />
            </Layout>
        );
    }
}

ListItems.propTypes = {
    className: PropTypes.string,
};

export default ListItems;
