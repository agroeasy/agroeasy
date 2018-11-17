import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Row, Col, Tag } from 'antd';
import { Image } from 'react-bootstrap';
import { PRODUCT_STRINGS } from './constants';


const { product_image, modalImageDetails, details, small, Buy,
        Cancel, More, primary, dashed, flex, center, biggestDiv
} = PRODUCT_STRINGS;
const ButtonGroup = Button.Group

//this is a child component, re-used for row(1-4)
 class Product extends Component {
  state = {
    loading: false,
    visible: false,
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 5000);
  }

  handleCancel = () => {
    this.setState({ visible: false });
  }

  render() {
    const { visible, loading } = this.state;
    return (
             <div  className={biggestDiv}>
                <img src={this.props.pix} alt="#" className={product_image} onClick={this.showModal} />
                <Modal title={this.props.title} centered visible={visible} onOk={this.handleOk} onCancel={this.handleCancel}
                  footer={[
                    <Button key="submit" size={small} type={primary} loading={loading} onClick={this.handleOk}>{Buy}</Button>,
                     <Button key="back" size={small} type={dashed} onClick={this.handleCancel}>{Cancel}</Button>,
                     ]} >

                    {/* this is the modal content */}

                    <Row type={flex} justify={center}>
                       <Col className={details}>
                         <Image src={this.props.pix} thumbnail/>
                         <br />
                        <div  className={modalImageDetails}>
                          <h6><b>Name:</b> {this.props.title}</h6>
                          <h6><b>Location:</b> {this.props.location}</h6>
                          <h6><b>Cost:</b> &nbsp; {this.props.tag}</h6>
                          <h6><b>Quantity available:</b> {this.props.quantity}</h6>
                          <h6><b>Phone no:</b> {this.props.phone}</h6>
                          <h6><b>Email:</b> {this.props.email}</h6>
                       </div>
                     </Col>
                   </Row>
             </Modal>
             <div className={details}>
               <h6> {this.props.title}
                 <br />
                 <Tag color="gold">{this.props.tag}</Tag>
               </h6> 
               <ButtonGroup>               
                 <Button size={small} type={primary} loading={loading} onClick={this.handleOk} >{Buy}</Button>
                 <Button size={small} type={dashed} onClick={this.showModal}>{More}</Button>
               </ButtonGroup>
             </div>
         </div>
    );
  }
}

Product.propTypes = {
  className: PropTypes.string,
  email: PropTypes.string,
  location: PropTypes.string,
  quantity: PropTypes.number,
  phone: PropTypes.string,
  pix: PropTypes.string,
  tag: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  key: PropTypes.string,
  color: PropTypes.string,
};

export default Product;
