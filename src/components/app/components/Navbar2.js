import React from 'react';
import { Avatar, Row, Col, List } from 'antd';

import { LOGO, PATHS, PROCUCT_CATEGORIIES, STRINGS } from '../constants';
import Search from '../../home/components/Search';
import AppLink from './AppLink';

const { AGROESY_LOGO, AVATAR, SHAPE, SHOPING_CART_LOGO, SIZE } = LOGO;
const { CENTER, FLEX, LARGE, MIDDLE } = STRINGS;

const { HOME } = PATHS;

class Navbar2 extends React.Component {
    render() {
        return (
            <div className="navbar2-main-div">
                <Row className="nav2-header" type={FLEX} justify={CENTER} align={MIDDLE}>
                    <Col span={6} className="logo-container2">
                        <AppLink to={HOME}>
                            <Avatar
                                className={AVATAR}
                                src={AGROESY_LOGO}
                                size={SIZE}
                                shape={SHAPE}
                            />
                        </AppLink>
                    </Col>
                    <Col span={12} className="avatar-container2">
                        <div className="search-container">
                            <Search />
                        </div>
                    </Col>
                    <Col span={6} className="avatar-container2">
                        <Avatar src={SHOPING_CART_LOGO} size={LARGE} className="cart-avatar" />
                    </Col>
                </Row>
                <List
                    className="list-category"
                    bordered={true}
                    grid={{ gutter: 16, lg: 6, md: 3, sm: 2, xl: 6, xs: 1 }}
                    dataSource={PROCUCT_CATEGORIIES}
                    renderItem={item => {
                        const { title } = item;
                        return (
                            <List.Item>
                                <List.Item.Meta title={title} className="list-item-meta" />
                            </List.Item>
                        );
                    }}
                />
            </div>
        );
    }
}

export default Navbar2;
