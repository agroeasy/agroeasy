import React from 'react';
import PropTypes from 'prop-types';
import {
    Badge,
    Button,
    ButtonGroup,
    ButtonToolbar,
    Col,
    Container,
    Modal,
    ModalBody,
    ModalFooter,
    Row
} from 'reactstrap';
import { Image } from 'react-bootstrap';

//this omponent was reused for row(1-4)
class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div>
                <Image src={this.props.pix} alt="#" className="product-image" onClick={this.toggle}  thumbnail/>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalBody className="modal-body">
                        <Container>
                            <Row>
                                <Col className="details">
                                    <Image src={this.props.pix} className="modal-image" thumbnail/>
                                    <br /><br /><hr />
                                    <div  className="modal-image-details">
                                        <h6><b>Name:</b> {this.props.title}</h6>
                                        <h6><b>Location:</b> {this.props.location}</h6>
                                        <h6><b>Cost:</b> &nbsp; {this.props.tag}</h6>
                                        <h6><b>Quantity available:</b> {this.props.quantity}</h6>
                                        <h6><b>Phone no:</b> {this.props.phone}</h6>
                                        <h6><b>Email:</b> {this.props.email}</h6>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" size="sm" onClick={this.toggle}>Buy Now</Button>{' '}
                        <Button color="primary" size="sm" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
                <div className="details">
                    <h6>
                        {this.props.title}
                        <br />
                        <Badge color="secondary" className="badge">{this.props.tag}</Badge>
                    </h6>
                    <ButtonToolbar>
                        <ButtonGroup>
                            <Button className="button" color="success" size="sm" active>Buy Now</Button>{' '}
                            <Button className="button" color="light" size="sm" onClick={this.toggle}>More Info</Button>{' '}
                        </ButtonGroup>
                    </ButtonToolbar>
                </div>
            </div>
        );
    }
}

Products.propTypes = {
    className: PropTypes.string,
    email: PropTypes.string,
    location: PropTypes.string,
    quantity: PropTypes.number,
    phone: PropTypes.string,
    pix: PropTypes.string,
    tag: PropTypes.string,
    title: PropTypes.string,
};

export default Products;
