import PropTypes from 'prop-types';
import React from 'react';
import { Image } from 'react-bootstrap';

import { PRODUCT } from './constants';

const {
    CLASSNAMES: { MODAL_IMAGE_DETAILS },
    COST,
    EMAIL,
    LOCATION,
    NAME,
    PHONE,
    QUANTITY,
} = PRODUCT;

//a child of Product.js, the modal info
class MoreInfo extends React.Component {
    render() {
        return(
            <div className={MODAL_IMAGE_DETAILS}>
                <Image src={ this.props.pix } thumbnail />
                <div>
                    <h6><b>{NAME}</b> {this.props.title}</h6>
                    <h6><b>{LOCATION}</b> {this.props.location}</h6>
                    <h6><b>{COST}</b> &nbsp; {this.props.tag}</h6>
                    <h6><b>{QUANTITY}</b> {this.props.quantity}</h6>
                    <h6><b>{PHONE}</b> {this.props.phone}</h6>
                    <h6><b>{EMAIL}</b> {this.props.email}</h6>
                </div>
            </div>
        );
    }
}

MoreInfo.propTypes = {
    email: PropTypes.string,
    location: PropTypes.string,
    phone: PropTypes.string,
    pix: PropTypes.string,
    quantity: PropTypes.string,
    tag: PropTypes.string,
    title: PropTypes.string,
};

export default MoreInfo;
