import React from 'react';
import { Card, Icon, Layout, List, Avatar } from 'antd';

import { ABOUT_US, ABOUT_TEXT, TEAM_INFO } from './constants';

const { Meta } = Card;
const { Content } = Layout;
const { TEXT_ONE, TEXT_TWO } = ABOUT_TEXT;
const { CLASSNAMES: { AVATAR, COVER, TEAM_CARD } } = ABOUT_US;

class AboutUs extends React.Component {
    render() {
        return (
            <Layout>
                <Content>
                    
                    <div>
                        <div className="top-div">
                            <p className="top-text">{TEXT_ONE}</p>
                        </div>
                        <div className={COVER}>
                            <p className='text'>{TEXT_TWO}</p>
                        </div>
                        <div className="profile-div">
                            <List  
                                bordered
                                dataSource={TEAM_INFO}
                                grid={{ gutter: 12, lg: 4, md: 3.7, sm: 1.7, xs: 1.8, xxl: 3 }}
                                renderItem={item => (
                                    <List.Item>
                                        <div key={item.name}>
                                            <Card
                                                hoverable
                                                bordered={false}
                                                className={TEAM_CARD}
                                                cover={<Avatar src={item.photo} shape="square" className={AVATAR}  />}
                                                actions={[<Icon type="linkedin" key="icon" />, 
                                                    <Icon type="facebook" key="icon" />, 
                                                    <Icon type="github" key="icon" />]}
                                            >
                                                <Meta
                                                    title={item.name}
                                                    description={<p className="team-profile" >{item.description}</p>}
                                                />
                                            </Card>
                                        </div>
                                    </List.Item>
                                )}
                            />
                        </div>
                    </div>
                </Content>
               
            </Layout>
        );
    }
}

export default AboutUs;
