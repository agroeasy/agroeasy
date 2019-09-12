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
        const { cost, description, imageUrl, name } = this.props.data;
        const itemdescription = (
            <div>
                <Tag color={TAG_COLOR}>{`#${cost}`}</Tag>
                {`${description.substring(0, 30)}...`}
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
                        description={itemdescription}
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
