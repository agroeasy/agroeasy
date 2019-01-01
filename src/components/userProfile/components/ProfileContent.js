import React from 'react';
import { Col, Row } from 'antd';

import AddItem from './AddItem';
import UserAvatar from './UserAvatar';
import UserInfo from './UserInfo';
import { USER_PAGE } from '../constants';

const { CLASSNAMES: { PROFILE_CONTENT }, TEXTS: { FLEX, START } } = USER_PAGE;

class ProfileContent extends React.Component {
    render() {
        return(
            <div>
                <Row type={FLEX} justify={START} gutter={3} className={PROFILE_CONTENT}>
                    <Col span={6}><UserAvatar /></Col>
                    <Col span={15}><UserInfo /></Col>
                </Row>
                <AddItem />
            </div>

        );
    }
}

export default ProfileContent;
