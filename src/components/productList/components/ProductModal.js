import PropTypes from 'prop-types';
import React from 'react';
import { Card, Icon, Modal } from 'antd';

import { PRODUCT } from '../constants';

const {
    ACTIONS: { SHOPPING, SHOPPING_CART },
    MODAL_INFO: { BUY, CANCEL, COST, EMAIL, LOCATION, PHONE, PRODUCERS_NAME, QUANTITY },
} = PRODUCT;

const generateDescription = data => {
    const { cost, quantity, producerId: {
        email,
        firstName, 
        lastName,
        phoneNumber,
        state, 
        address, 
        city,
    }  } = data;
    const keyValuePairs = [
        { key: PRODUCERS_NAME, value: `${lastName} ${firstName}` },
        { key: LOCATION, value: `${address} ${city} ${state}` },
        { key: COST, value: cost },
        { key: QUANTITY, value: quantity },
        { key: PHONE, value: phoneNumber },
        { key: EMAIL, value: email },
    ];

    return keyValuePairs.map(({ key, value }) => (
        <p key={key}>
            <b>{key}</b> {value}
        </p>
    ));
};

// React Component used to render the product detail information in a 'Modal'
class ProductModal extends React.Component {
    render() {
        const { data, handleCancel, visible } = this.props;
        const { imageUrl, title } = data;
        
        const actions = [
            <Icon key={SHOPPING} type={SHOPPING} />,
            <Icon key={SHOPPING_CART} type={SHOPPING_CART} />,
        ];

        return (
            <Modal
                cancelText={CANCEL}
                closable={false}
                destroyOnClose
                onCancel={handleCancel}
                okText={BUY}
                onOk={handleCancel}
                title={title}
                visible={visible}
            >
                <Card actions={actions} cover={<img src={imageUrl} />}>
                    {generateDescription(data)}
                </Card>
            </Modal>
        );
    }
}

ProductModal.propTypes = {
    data: PropTypes.object,
    handleCancel: PropTypes.func,
    visible: PropTypes.bool,
};

export default ProductModal;
