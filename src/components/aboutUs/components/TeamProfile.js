import React from 'react';
import { Avatar, Card, Icon, List } from 'antd';

import { ABOUT_US, TEAM_INFO } from './constants';

const { Meta } = Card;
const { 
    CLASSNAMES: { AVATAR, TEAM_CARD, TEAM_PROFILE },
    STRINGS: { FACEBOOK, GITHUB, ICON, LINKEDIN, SQUARE }, 
} = ABOUT_US;

class TeamProfile extends React.Component {
    render() {
        return(
            <List  
                bordered={false}
                dataSource={TEAM_INFO}
                grid={{ gutter: 12, lg: 4, md: 4, sm: 1.8, xs: 1.8, xxl: 3 }}
                renderItem={item => (
                    <List.Item>
                        <div key={item.name}>
                            <Card
                                hoverable
                                bordered={false}
                                className={TEAM_CARD}
                                cover={
                                    <Avatar src={item.photo} shape={SQUARE} className={AVATAR} />
                                }
                                actions={[<Icon type={LINKEDIN} key={ICON} />, 
                                    <Icon type={FACEBOOK} key={ICON} />, 
                                    <Icon type={GITHUB} key={ICON} />]}
                            >
                                <Meta
                                    title={item.name}
                                    description={<p className={TEAM_PROFILE} >
                                        {item.description}
                                    </p>}
                                />
                            </Card>
                        </div>
                    </List.Item>
                )}
            />
        );
    }
}

export default TeamProfile;
