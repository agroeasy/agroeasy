import React from 'react';
import { Avatar, Card, Col, Icon, Row, Button } from 'antd';

import { PROFILE_INFO, USER_PAGE } from '../constants';

const { 
    CLASSNAMES: { 
        AVATAR, 
        AVATAR_CONTAINER, 
        EDIT_ICON, 
        EDIT_BOTTON, 
        INFO_CARD, 
        INFO_DIV, 
        ROW_CONTAINER, 
        TITLE, 
    },
    PROFILE_PIX,
    STRINGS: { EDIT, GHOST, SMALL, SQUARE },
    TEXTS: { EDIT_PHOTO },
} = USER_PAGE;

// mapping various user information
const profile = PROFILE_INFO.map(({ heading, info, key }) => ( 
    <div key={key} className={INFO_DIV}>
        <h4>
            {heading}  
            <Icon type={EDIT} className={EDIT_ICON} />
        </h4>
        {
            info.map(({ description, title }) => (
                <Row gutter={16} key={title} className={ROW_CONTAINER}>
                    <Col span={12} className={TITLE}>{title}</Col>
                    <Col span={12}>{description}</Col>
                </Row>
            ))
        }
    </div>

));

// react component used to render user information
export default class UserInfo extends React.Component {
    render() {
        
        return (
            <Card
                className={INFO_CARD}
                bordered={false}
            >
                <div className={AVATAR_CONTAINER}>
                    <Avatar
                        className={AVATAR}
                        src={PROFILE_PIX}
                        shape={SQUARE}
                    />
                    <Button type={GHOST} size={SMALL} className={EDIT_BOTTON}>
                        {EDIT_PHOTO}
                        <Icon type={EDIT} />
                    </Button>
                </div>
                {profile}
            </Card>
        );
    }
}
