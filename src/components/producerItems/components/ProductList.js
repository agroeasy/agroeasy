import PropTypes from 'prop-types';
import React from 'react';
import { Avatar, Icon, List, Tag } from 'antd';

import { LIST_ITEM_CLASS, PRODUCER_PAGE } from '../constants';

const { EDIT, LARGE, PRODUCT_ITEM, VERTICAL } = PRODUCER_PAGE;

/**
 * Helper function used to generate tags for the item meta descrition section.
 *
 * @function
 * @param {Object} item - the current item
 * @return {Array} - a list tag elements
 */
function createItemDescTags(item) {
    const { cost, quantity, type } = item;
    const tags = [
        { color: '#108ee9', info: `Type: ${type}`, key: 'type' },
        { color: '#87d068', info: `Price: # ${cost}`, key: 'cost' },
        { color: '#2db7f5', info: `Quantity: ${quantity}`, key: 'quantity' },
    ];

    return tags.map(({ color, info, key }) => (
        <Tag color={color} key={key}>{info}</Tag>)
    );
}

/**
 * React component used to render the product list
 */
export default class ProductList extends React.Component {
    render() {
        const { list, openModal } = this.props;
        return (
            <List
                bordered={true}
                className={PRODUCT_ITEM}
                itemLayout={VERTICAL}
                size={LARGE}
                pagination={{ pageSize: 10 }}
                dataSource={list}
                renderItem={item => {
                    const { description, _id, image_url, name } = item;
                    const actions = [
                        <Icon key={EDIT} onClick={() => openModal(_id)} type={EDIT} />,
                    ];

                    return (
                        <List.Item
                            actions={actions}
                            key={_id}
                            extra={<img width={200} src={image_url} />}
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={image_url} />}
                                description={createItemDescTags(item)}
                                title={name}
                            />
                            <span className={LIST_ITEM_CLASS}>{description}</span>
                        </List.Item>
                    );
                }}
            />
        );
    }
}

ProductList.propTypes = {
    list: PropTypes.array,
    openModal: PropTypes.func,
};
