import PropTypes from 'prop-types';
import React from 'react';
import { Col, Layout, Row } from 'antd';

import { components } from '../../rows';
import { ListItem_stings } from './constants';

const { Row1, Row2, Row3, Row4 } = components;
const { center, flex, header, smallDiv, rowItems } = ListItem_stings;
const { Header, Content } = Layout;

//contains components SearchItems, ProductsLocation and Rows
class ListItems extends React.Component {
    render() {
        return(
            <Layout>
                <Header className={header}>
                    <Row type={flex} justify={center}>
                        <Col span={5}>
                        </Col>
                    </Row>
                </Header>
                <Layout>
                    <Content>
                        <Row type={flex} justify={center}>
                            <Col span={18}  className={smallDiv}>
                                <div className={rowItems}>
                                    <Row1 />
                                    <Row2 />
                                    <Row3 />
                                    <Row4 />
                                </div>
                            </Col>
                        </Row>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

ListItems.propTypes = {
    className: PropTypes.string,
};

export default ListItems;
