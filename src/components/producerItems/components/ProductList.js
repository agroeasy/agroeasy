import PropTypes from 'prop-types';
import React from 'react';
import { Avatar, Icon, List } from 'antd';

import { LIST_ITEM_CLASS, PRODUCER_PAGE } from '../constants';

const { EDIT, LARGE, LOGO, PRODUCT_ITEM, VERTICAL } = PRODUCER_PAGE;

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
                    const { avatar, description, id, location } = item;
                    const actions = [
                        <Icon key={EDIT} onClick={() => openModal(id)} type={EDIT} />,
                    ];

                    return (
                        <List.Item
                            actions={actions}
                            key={id}
                            extra={<img width={200} alt={LOGO} src={avatar} />}
                        >
                            <List.Item.Meta
                                {...item}
                                avatar={<Avatar src={avatar} />}
                                description={item.cost}
                            />
                            <span className={LIST_ITEM_CLASS}>{description}</span>
                            <span className={LIST_ITEM_CLASS}>{location}</span>
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
