import React from 'react';
import { Avatar, Card, Col, Icon, Row, Button } from 'antd';

import { PROFILE_INFO, USER_PAGE } from '../constants';

const { 
    CLASSNAMES: {  
        EDIT_BOTTON,
        EDIT_PROFILE_BUTTON,
        HEADER_INFO,
        IMAGE_CONTAINER,  
        INFO_CARD, 
        INFO_DIV,
        PROFILE_IMAGE, 
        ROW_CONTAINER, 
        TITLE, 
    },
    PROFILE_PIX,
    STRINGS: { EDIT, GHOST, MEDIUM, PRIMARY, SMALL, SQUARE },
    TEXTS: { EDIT_PHOTO, EDIT_PROFILE },
} = USER_PAGE;

// mapping various user information
const profile = PROFILE_INFO.map(({ heading, info, key }) => ( 
    <div key={key} className={INFO_DIV}>
        <h4 className={HEADER_INFO}>
            {heading}  
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
                <div className={IMAGE_CONTAINER}>
                    <Avatar
                        className={PROFILE_IMAGE}
                        src={PROFILE_PIX}
                        size={180}
                        shape={SQUARE}
                    />
                    <Button type={GHOST} size={SMALL} className={EDIT_BOTTON}>
                        {EDIT_PHOTO}
                        <Icon type={EDIT} />
                    </Button>
                </div>
                {profile}
                <Button type={PRIMARY} size={MEDIUM} className={EDIT_PROFILE_BUTTON}>
                    {EDIT_PROFILE}
                </Button>
            </Card>
        );
    }
}
