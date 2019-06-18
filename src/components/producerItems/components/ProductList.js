import PropTypes from 'prop-types';
import React from 'react';
import { Avatar, Icon, List, Tag, Popconfirm } from 'antd';

import { LIST_ITEM_CLASS, PRODUCER_PAGE } from '../constants';

const { CONFIRM_MESSAGE, DELETE, EDIT, LARGE, NO, PRODUCT_ITEM, VERTICAL, YES } = PRODUCER_PAGE;

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
        <Tag color={color} key={key}>
            {info}
        </Tag>
    ));
}

/**
 * React component used to render the product list
 */
export default class ProductList extends React.Component {
    render() {
        const { list, openModal, onConfirm, onCancel } = this.props;
        return (
            <List
                bordered={true}
                className={PRODUCT_ITEM}
                itemLayout={VERTICAL}
                size={LARGE}
                pagination={{ pageSize: 10 }}
                dataSource={list}
                renderItem={item => {
                    const { description, _id, imageUrl, name } = item;
                    const actions = [
                        <Icon key={EDIT} onClick={() => openModal(_id)} type={EDIT} />,
                        <Popconfirm
                            key={DELETE}
                            title={CONFIRM_MESSAGE}
                            onConfirm={() => onConfirm(_id)}
                            onCancel={onCancel}
                            okText={YES}
                            cancelText={NO}
                        >
                            <Icon type={DELETE} />
                        </Popconfirm>,
                    ];

                    return (
                        <List.Item
                            actions={actions}
                            key={_id}
                            extra={<img width={200} src={imageUrl} />}
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={imageUrl} />}
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
    onCancel: PropTypes.func,
    onConfirm: PropTypes.func,
    openModal: PropTypes.func,
};
