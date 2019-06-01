import React, { Component } from 'react';
import { Skeleton, List, Avatar } from 'antd';

import Auth from './Auth';
import { SKELETON_DATA } from './constants';

const listData = [];
for (let i = 0; i < 3; i++) {
    listData.push(SKELETON_DATA);
}

//Component that shows faint user profile when auth0 is authenticating user
 
class Callback extends Component {

    componentDidMount() {
        const auth = new Auth();
        auth.handleAuthentication();
    }

    render() {
        return (
            <div>  
                <List
                    itemLayout="vertical"
                    size="large"
                    dataSource={listData}
                    renderItem={item => (
                        <List.Item key={item.title}>
                            <Skeleton active avatar>
                                <List.Item.Meta
                                    avatar={<Avatar src={item.avatar} />}
                                    title={<a href={item.href}>{item.title}</a>}
                                    description={item.description}
                                />
                                {item.content}
                            </Skeleton>
                        </List.Item>
                    )}
                />
            </div>
        );
    }
}

export default Callback;
