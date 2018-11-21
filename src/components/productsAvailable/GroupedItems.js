import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';

import { strings } from './constants';

const { className1, className2 } = strings;
//This component encapsulates items on productsavailable.js
class GroupedItems extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col className={className1}>
                        <ul>
                            <h6>{this.props.heading}</h6>
                            {
                                this.props.items.map(item =>
                                    (<li key={item.name}>
                                        <Link to={item.link} className={className2}>
                                            {item.name}
                                        </Link>
                                    </li>)
                                )
                            }
                        </ul>
                    </Col>
                </Row>
            </Container>
        );
    }
}

GroupedItems.propTypes = {
    heading: PropTypes.string,
    items: PropTypes.array,
};

export default GroupedItems;
