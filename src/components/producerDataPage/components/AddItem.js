import React from 'react';
import { List, Avatar, Icon } from 'antd';
import { LIST_DATA } from '../constants';

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
                    bordered={true}
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                        onChange: page => {
                            return page;
                        },
                        pageSize: 10,
                    }}
                    dataSource={LIST_DATA}
                    footer={
                        <a href={'./'}><b><Icon type="plus" /></b> Add an item for sale</a>
                    }
                    renderItem={item => (
                        <List.Item
                            actions={[<Icon key="edit" type="edit" />]}
                            key={item.title}
                            extra={<img width={200} alt="logo" src={item.avatar} />}
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={item.avatar} />}
                                title={item.title}
                                cost={item.cost}
                                location={location}
                                description={item.description}
                            />
                            {item.description}
                        </List.Item>
                    )}
                />
            </div>

        );
    }
}
