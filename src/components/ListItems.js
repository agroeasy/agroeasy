import React from 'react';
import { Col, Row, Container, Input, InputGroup, Button, InputGroupAddon } from 'reactstrap';
import { Link } from 'react-router-dom';
import { BottonText, ListItem_stings } from './constants';
import Row4 from './rows/row4';
import Row3 from './rows/row3';
import Row2 from './rows/row2';
import Row1 from './rows/row1';
import ProductLocation from './Locations';

const { className1, smallDiv, rowItems, More } = ListItem_stings;
/*
This is a component of varieties of products appearing
in no particular order
*/
class ListItems extends React.Component {
    render() {
        return (
            <Container fluid className={className1}>
                <Row>
                    <Col md={3}>
                        <div>
                            <div className={smallDiv}>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <Button onClick={this.search}>{BottonText}</Button>
                                    </InputGroupAddon>
                                    <Input placeholder="search products" />
                                </InputGroup>
                            </div>
                            <br />
                            <div className={smallDiv}>
                                <ProductLocation />
                            </div>
                        </div>
                    </Col>
                    <Col md={7} className={smallDiv} >
                        <div className={rowItems}>
                            <Row1 />
                            <Row2 />
                            <Row3 />
                            <Row4 />
                        </div>
                        <div className={More}>
                            <Link to={More}>More</Link>
                        </div>
                    </Col>
                    <Col md={3}></Col>
                </Row>
            </Container>
        );
    }
}

export default ListItems;
