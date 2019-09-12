import PropTypes from 'prop-types';
import React from 'react';
import { Avatar, Card, Icon, Tag } from 'antd';

import ProductModal from './ProductModal';
import { PRODUCT } from '../constants';

const { Meta } = Card;
const {
    ACTIONS: { INFO_CIRCLE },
    CARD_IMAGE,
    TAG_COLOR,
} = PRODUCT;

// React Component used to render the product item in a 'Card'
class Product extends React.Component {
    state = { visible: false };

    showModal = () => {
        this.setState({ visible: true });
    };

    handleCancel = () => {
        this.setState({ visible: false });
    };

    render() {
        const { visible } = this.state;
        const { cost, description, imageUrl, name } = this.props.data;

        const productDescription = (tag, description) => (
            <div>
                <Tag color={TAG_COLOR}>{tag}</Tag>
                {description}
            </div>
        );
        const actions = [<Icon key={INFO_CIRCLE} type={INFO_CIRCLE} onClick={this.showModal} />];

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
                        description={productDescription(cost, description)}
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
