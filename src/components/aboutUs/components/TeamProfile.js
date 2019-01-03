import React from 'react';
import { Avatar, Card, Icon, List } from 'antd';

import { ABOUT_US, SOCIAL_MEDIA, TEAM_INFO } from '../constants';

const { Meta } = Card;
const { 
    CLASSNAMES: { AVATAR, TEAM_CARD, TEAM_HEADER },
    TEXTS: { HEADER_TEXT },
    STRINGS: { SQUARE }, 
} = ABOUT_US;

const actionList = SOCIAL_MEDIA.map(social => (<Icon type={social} key={social} />));

class TeamProfile extends React.Component {
    render() {
        return(
            <List  
                header={<h4 className={TEAM_HEADER}><u>{HEADER_TEXT}</u></h4>}
                bordered={false}
                dataSource={TEAM_INFO}
                grid={{ column: 3, lg: 3, md: 1, sm: 1, xs: 1, xxl: 3 }}
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
                            actions={actionList}
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
