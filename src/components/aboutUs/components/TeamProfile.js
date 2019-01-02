import React from 'react';
import { Avatar, Card, Icon, List } from 'antd';

import { ABOUT_US, TEAM_INFO } from '../constants';

const { Meta } = Card;
const { 
    CLASSNAMES: { AVATAR, TEAM_CARD },
    STRINGS: { FACEBOOK, GITHUB, LINKEDIN, SQUARE }, 
} = ABOUT_US;

class TeamProfile extends React.Component {
    render() {
        return(
            <List  
                bordered={false}
                dataSource={TEAM_INFO}
                grid={{ gutter: 12, lg: 4, md: 1.7, sm: 1.8, xs: 1.7, xxl: 3 }}
                renderItem={item => (
                    <List.Item>   
                        <Card
                            key={item.name}
                            hoverable
                            bordered={false}
                            className={TEAM_CARD}
                            cover={
                                <Avatar src={item.photo} shape={SQUARE} className={AVATAR} />
                            }
                            actions={[<Icon type={LINKEDIN} key={LINKEDIN} />, 
                                <Icon type={FACEBOOK} key={FACEBOOK} />, 
                                <Icon type={GITHUB} key={GITHUB} />]}
                        >
                            <Meta
                                title={item.name}
                                description={item.description }
                            />
                        </Card> 
                    </List.Item>
                )}
            />
        );
    }
}

export default TeamProfile;
