import React from 'react';
import { List, Avatar, Icon } from 'antd';
import { LISTDATA } from '../constants';

const IconText = ({ type, text }) => (
    <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
    </span>
);

export default class AddItem extends React.Component {
    render() {
        return (
            <div className='product-item'>
                <List
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                        onChange: page => {
                            return page;
                        },
                        pageSize: 3,
                    }}
                    dataSource={LISTDATA}
                    footer={
                        <a href={'./'}><b><Icon type="plus" /></b> Add an item for sale</a>
                    }
                    renderItem={item => (
                        <List.Item
                            actions={[<a>edit</a>]}
                            key={item.title}
                            extra={<img width={272} alt="logo" src={item.avatar} />}
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={item.avatar} />}
                                title={<a href={item.href}>{item.title}</a>}
                                cost={item.cost}
                                location={location}
                            />
                            {item.description}
                        </List.Item>
                    )}
                />
            </div>

        );
    }
}
