import PropTypes from 'prop-types';
import React from 'react';
import { Avatar, Card, Icon, Tag } from 'antd';

import ProductModal from './ProductModal';
import { PRODUCT } from '../constants';

const { Meta } = Card;
const {
    ACTIONS: { INFO_CIRCLE, SHOPPING },
    CARD_IMAGE,
    DEFAULT_DESCRIPTION,
    TAG_COLOR,
} = PRODUCT;

// React Component used to render the product item in a 'Card'
class Product extends React.Component {
    state = { visible: false }

    showModal = () => {
        this.setState({ visible: true });
    }

    handleCancel = () => {
        this.setState({ visible: false });
    }

    render() {
        const { visible } = this.state;
        const { cost, imageUrl, name } = this.props.data;

        const description = tag => (
            <div>
                <Tag color={TAG_COLOR}>{tag}</Tag>
                {DEFAULT_DESCRIPTION}
            </div>
        );
        const actions = [
            <Icon key={SHOPPING} type={SHOPPING} />,
            <Icon key={INFO_CIRCLE} type={INFO_CIRCLE} onClick={this.showModal} />,
        ];

        return (
            <div>
                <Card
                    actions={actions}
                    cover={<img className={CARD_IMAGE} src={imageUrl} />}
                    hoverable
                    key={name}
                >
                    <Meta
                        avatar={<Avatar src={imageUrl} />}
                        title={name}
                        description={description(cost)}
                    />
                </Card>
                <ProductModal
                    data={this.props.data}
                    handleCancel={this.handleCancel}
                    visible={visible}
                />
            </div>
        );
    }
}

Product.propTypes = {
    data: PropTypes.object,
};

export default Product;
