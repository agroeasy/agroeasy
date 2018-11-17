import React from 'react';
import { Row, Col } from 'antd';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ListItem_stings } from './constants';
import Row4 from './rows/Row4';
import Row3 from './rows/Row3';
import Row2 from './rows/Row2';
import Row1 from './rows/Row1';
import ProductLocation from './Locations';
import SearchItems from './SmallerComponents/Search';

const { className1, smallDiv, rowItems, More } = ListItem_stings;
/*
This is a component of varieties of products appearing
in no particular order
*/
class ListItems extends React.Component {
    render() {
        return (
            <Row className={className1}>
                <Col span={5}>
                    <div>
                        <div className={smallDiv}>
                            <SearchItems />
                        </div>
                        <br />
                        <div className={smallDiv}>
                            <ProductLocation />
                        </div>
                    </div>
                </Col>
                <Col span={15} className={smallDiv} >
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
                <Col span={4}></Col>
            </Row>
            
        );
    }
}

ListItems.PropTypes = {
    className: PropTypes.string,
};

export default ListItems;
