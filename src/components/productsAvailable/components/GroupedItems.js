import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Col, Row } from 'antd';
import { strings } from './constants';

const { groupedItems, list } = strings;
//This component encapsulates items on productsavailable.js
class GroupedItems extends React.Component {
    render() {
        return (
            <Row>
                <Col className={groupedItems} span={12} offset={6}>
                    <ul>
                        <h6>{this.props.heading}</h6>
                        {
                            this.props.items.map(item =>
                                <li key={item.name}>
                                    <Link to={item.link} className={list}>
                                        {item.name}
                                    </Link>
                                </li>
                            )
                        }
                    </ul>
                </Col>
            </Row>
        );
    }
}

GroupedItems.propTypes = {
    className: PropTypes.string,
    heading: PropTypes.string,
    items: PropTypes.array,
};

export default GroupedItems;
