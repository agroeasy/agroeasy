import PropTypes from 'prop-types';
import React from 'react';
import { Col, Layout, Row } from 'antd';

import { components } from '../../rows';
import { LIST_ITEMS } from './constants';

const { Header, Content } = Layout;
const { Row1, Row2, Row3, Row4 } = components;
const { CENTER, FLEX, HEADER, ROW_ITEMS, SMALL_DIV } = LIST_ITEMS;

//contains components SearchItems, ProductsLocation and Rows
class ListItems extends React.Component {
    render() {
        return(
            <Layout>
                <Header className={HEADER}>
                    <Row type={FLEX} justify={CENTER}>
                        <Col span={5}>
                        </Col>
                    </Row>
                </Header>
                <Layout>
                    <Content>
                        <Row type={FLEX} justify={CENTER}>
                            <Col span={18} className={SMALL_DIV}>
                                <div className={ROW_ITEMS}>
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
