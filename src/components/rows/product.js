import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Row, Col, Tag } from 'antd';
import { PRODUCT_STRINGS } from './constants';
import MoreInfo from './MoreInfo';


const { product_image, details, small, Buy, Cancel, More, primary, dashed, flex, center, biggestDiv } = PRODUCT_STRINGS;
const ButtonGroup = Button.Group

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
    return (
             <div  className={biggestDiv}>
                <img src={this.props.pix} alt="#" className={product_image} onClick={this.showModal} />
                <Modal title={this.props.title} centered visible={visible} onOk={this.handleOk} onCancel={this.handleCancel}
                  footer={[
                    <Button key="submit" size={small} type={primary} onClick={this.handleOk}>{Buy}</Button>,
                     <Button key="back" size={small} type={dashed} onClick={this.handleCancel}>{Cancel}</Button>,
                     ]} >

                    {/* this is the modal content */}

                    <Row type={flex} justify={center}>
                       <Col className={details}>
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
             <div className={details}>
               <h6> {this.props.title}
                 <br />
                 <Tag color="gold">{this.props.tag}</Tag>
               </h6> 
               <ButtonGroup>               
                 <Button size={small} type={primary} onClick={this.handleOk} >{Buy}</Button>
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
