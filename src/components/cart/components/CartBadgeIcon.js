import React from 'react';
import { Badge, Icon } from 'antd';

// import { ITEM, SHOPPING_CART } from '../constants';

const CartBadgeIcon = ({ count }) => (
    <Badge showZero count={count} title={`${count} item${count > 1 ? 's' : ''}`}>
        <Icon type="shopping-cart" />
    </Badge>
);

export default CartBadgeIcon;
