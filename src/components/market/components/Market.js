import PropTypes from 'prop-types';
import React from 'react';
import { Avatar, Card, Icon, Tag } from 'antd';

import MarketModal from './MarketModal';
import { PRODUCT } from '../constants';

const { Meta } = Card;
const {
    ACTIONS: { INFO_CIRCLE },
    CARD_IMAGE,
    DEFAULT_DESCRIPTION,
    TAG_COLOR,
} = PRODUCT;

// React Component used to render the market item in a 'Card'
class Market extends React.Component {
    state = { visible: false };

    showModal = () => {
        this.setState({ visible: true });
    };

    handleCancel = () => {
        this.setState({ visible: false });
    };

    render() {
        const { visible } = this.state;
        const { cost, image, name } = this.props.data;
        const description =  (
            <div>
                <Tag color={TAG_COLOR}>{cost}</Tag>
                {DEFAULT_DESCRIPTION}
            </div>
        );
        const actions = [<Icon key={INFO_CIRCLE} type={INFO_CIRCLE} onClick={this.showModal} />];

        return (
            <div>
                <Card
                    actions={actions}
                    cover={<img className={CARD_IMAGE} src={image} />}
                    hoverable
                    key={name}
                >
                    <Meta
                        avatar={<Avatar src={image} />}
                        title={name}
                        description={description}
                    />
                </Card>
                <MarketModal
                    data={this.props.data}
                    handleCancel={this.handleCancel}
                    visible={visible}
                />
            </div>
        );
    }
}

Market.propTypes = {
    data: PropTypes.object,
};

export default Market;
