import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Row, Col, Tag } from 'antd';
import { PRODUCT } from './constants';
import MoreInfo from './MoreInfo';

const ButtonGroup = Button.Group;
const { BUY, CANCEL, CLASSNAMES, MORE, STYLES } = PRODUCT;
const { BIGGEST_DIV, DETAILS, PRODUCT_IMAGE } = CLASSNAMES;
const { CENTER, DASHED, FLEX, PRIMARY, SMALL } = STYLES;

//this is a child component, re-used for row(1-4)
class Product extends Component {
    state = {
        visible: false,
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleCancel = () => {
        this.setState({ visible: false });
    }

    render() {
        const { visible } = this.state;
        const footer = [
            <Button
                key="submit"
                size={SMALL}
                type={PRIMARY}
                onClick={this.handleOk}
            >{BUY}</Button>,
            <Button
                key="back"
                size={SMALL}
                type={DASHED}
                onClick={this.handleCancel}
            >{CANCEL}</Button>,
        ];

        return (
            <div  className={BIGGEST_DIV}>
                <img
                    src={this.props.pix}
                    alt="#"
                    className={PRODUCT_IMAGE}
                    onClick={this.showModal}
                />
                <Modal
                    title={this.props.title}
                    centered visible={visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={footer}
                >
                    <Row type={FLEX} justify={CENTER}>
                        <Col span={24} className={DETAILS}>
                            <MoreInfo
                                name={this.props.title}
                                tag={this.props.tag}
                                pix={this.props.pix}
                                email={this.props.email}
                                quantity={this.props.quantity}
                                location={this.props.location}
                                phone={this.props.phone}
                            />
                        </Col>
                    </Row>
                </Modal>
                <div className={DETAILS}>
                    <h6> {this.props.title} &nbsp;
                        <Tag color="gold">{this.props.tag}</Tag>
                    </h6>
                    <ButtonGroup>
                        <Button size={SMALL} type={PRIMARY} onClick={this.handleOk}>{BUY}</Button>
                        <Button size={SMALL} type={DASHED} onClick={this.showModal}>{MORE}</Button>
                    </ButtonGroup>
                </div>
            </div>
        );
    }
}

Product.propTypes = {
    email: PropTypes.string,
    key: PropTypes.string,
    location: PropTypes.string,
    phone: PropTypes.string,
    pix: PropTypes.string,
    quantity: PropTypes.string,
    tag: PropTypes.string,
    title: PropTypes.string,
};

export default Product;
