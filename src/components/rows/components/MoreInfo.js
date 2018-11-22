import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';
import { PRODUCT_STRINGS } from './constants';

//a child of Product.js, the modal info
const { Cost, Email, Location, modalImageDetails, Name, Phone, Quantity } = PRODUCT_STRINGS;
class MoreInfo extends React.Component {
    render() {
        return(
            <div className={modalImageDetails}>
                <Image src={ this.props.pix } thumbnail />
                <div>
                    <h6><b>{Name}</b> {this.props.title}</h6>
                    <h6><b>{Location}</b> {this.props.locations}</h6>
                    <h6><b>{Cost}</b> &nbsp; {this.props.tag}</h6>
                    <h6><b>{Quantity}</b> {this.props.quantity}</h6>
                    <h6><b>{Phone}</b> {this.props.phone}</h6>
                    <h6><b>{Email}</b> {this.props.email}</h6>
                </div>
            </div>
        );
    }
}

MoreInfo.PropTypes = {
    className: PropTypes.string,
    email: PropTypes.string,
    location: PropTypes.string,
    quantity: PropTypes.number,
    phone: PropTypes.string,
    pix: PropTypes.string,
    tag: PropTypes.string,
    title: PropTypes.string,

};

export default MoreInfo;
