import React, { Component } from 'react';
import { Skeleton, List, Avatar } from 'antd';

import Auth from './Auth';
import { skeletonData } from './constants';

//Component that shows faint user profile when auth0 is authenticating user
 
class Callback extends Component {

    componentDidMount() {
        const auth = new Auth();
        auth.handleAuthentication();
    }

    render() {
        return (
            <List
                itemLayout="vertical"
                size="large"
                dataSource={skeletonData}
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
        );
    }
}

export default Callback;
