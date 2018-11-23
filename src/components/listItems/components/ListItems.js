import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Col, Icon, Layout, Row } from 'antd';
import { ListItem_stings } from './constants';
import ProductLocation from './Locations';
import Row4 from '../../rows/components/Row4';
import Row3 from '../../rows/components/Row3';
import Row2 from '../../rows/components/Row2';
import Row1 from '../../rows/components/Row1';

const { center, flex, header, left, smallDiv, More, moreProducts, rowItems, sider, stepForward } = ListItem_stings;
const { Header, Content, Sider } = Layout;
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
                    <Sider className={sider}>
                        <Row type={flex} justify={left}>
                            <Col span={22}>
                                <div className={smallDiv}>
                                    <ProductLocation />
                                </div>
                            </Col>
                        </Row>
                    </Sider>
                    <Content>
                        <Row type={flex} justify={center}>
                            <Col span={18}  className={smallDiv}>
                                <div className={rowItems}>
                                    <Row1 />
                                    <Row2 />
                                    <Row3 />
                                    <Row4 />
                                </div>
                                <div className={More}>
                                    <Link to={More}>
                                        <Icon type={stepForward} title={moreProducts} />
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

ListItems.PropTypes = {
    className: PropTypes.string,
};

export default ListItems;
