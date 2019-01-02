import React from 'react';
import { List, Avatar, Icon } from 'antd';
import { LIST_DATA, PRODUCER_PAGE } from '../constants';

const { EDIT, LARGE, LOGO, PRODUCT_ITEM, VERTICAL } = PRODUCER_PAGE;

class AddItem extends React.Component {
    render() {
        return (
            <div className={PRODUCT_ITEM}>
                <List
                    bordered={true}
                    itemLayout={VERTICAL}
                    size={LARGE}
                    pagination={{
                        onChange: page => ({ page }),
                        pageSize: 10,
                    }}
                    dataSource={LIST_DATA}
                    renderItem={item => (
                        <List.Item
                            actions={[<Icon key={EDIT} type={EDIT} />]}
                            key={item.title}
                            extra={<img width={200} alt={LOGO} src={item.avatar} />}
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

export default AddItem;
