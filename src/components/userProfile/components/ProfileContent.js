import React from 'react';
import { Col, Row } from 'antd';

import UserAvatar from './UserAvatar';
import UserInfo from './UserInfo';
import { USER_PAGE } from '../constants';

const { CLASSNAMES: { PROFILE_CONTENT }, TEXTS: { FLEX, START } } = USER_PAGE;

export default class ProfileContent extends React.Component {
    render() {
        return(
            <Row type={FLEX} justify={START} gutter={3} className={PROFILE_CONTENT}>
                <Col span={6}><UserAvatar /></Col>
                <Col span={15}><UserInfo /></Col>
            </Row>
        );
    }
}
