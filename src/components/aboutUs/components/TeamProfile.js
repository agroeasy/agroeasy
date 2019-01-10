import React from 'react';
import { Avatar, Card, Icon, List } from 'antd';

import { ABOUT_US, TEAM_INFO } from '../constants';

const { Meta } = Card;
const {
    CLASSNAMES: { AVATAR, TEAM_CARD, TEAM_HEADER },
    STRINGS: { NEW_WINDOW, SQUARE },
    TEXTS: { HEADER_TEXT },
} = ABOUT_US;

class TeamProfile extends React.Component {
    render() {
        return(
            <List
                dataSource={TEAM_INFO}
                header={<h4 className={TEAM_HEADER}>{HEADER_TEXT}</h4>}
                grid={{ column: 3, lg: 3, md: 1, sm: 1, xs: 1, xxl: 3 }}
                renderItem={({ description, name, photo, social_media }) => (
                    <List.Item>
                        <Card
                            key={name}
                            hoverable
                            bordered={false}
                            className={TEAM_CARD}
                            cover={<Avatar src={photo} shape={SQUARE} className={AVATAR} />}
                            actions={
                                social_media.map(({ icon, link }) => (
                                    <a href={link} key={icon} target={NEW_WINDOW}>
                                        <Icon type={icon} />
                                    </a>
                                ))
                            }
                        >
                            <Meta
                                title={name}
                                description={description }
                            />
                        </Card>
                    </List.Item>
                )}
            />
        );
    }
}

export default TeamProfile;
