import React from 'react';
import { Badge, Icon } from 'antd';

const CartBadgeIcon = ({ count }) => (
    <Badge count={count} title={`${count} item${count > 1 ? 's' : ''}`}>
        <Icon type="shopping-cart" />
    </Badge>
);

export default CartBadgeIcon;
