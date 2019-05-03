import React from 'react';
import { Avatar, Card } from 'antd';

import { BASIC_INFOMATION, USER_PAGE } from '../constants';

const { Meta } = Card;
const {
    CLASSNAMES: { AVATAR, AVATAR_CARD, BASIC_INFO, HEADER_TITLE },
    PROFILE_PIX,
    STRINGS: { SQUARE },
    TEXTS: { BASIC_INFO_TEXT }
} = USER_PAGE;

export default class UserAvatar extends React.Component {
    render() {
        return (
            <div>
                <Avatar className={AVATAR} src={PROFILE_PIX} shape={SQUARE} />
                <Card bordered={false} className={AVATAR_CARD}>
                    <Meta
                        title={<h4 className={HEADER_TITLE}>{BASIC_INFO_TEXT}</h4>}
                        description={BASIC_INFOMATION.map(data => (
                            <div key={data.title} className={BASIC_INFO}>
                                <b>{data.title}</b>
                                <div>{data.description}</div>
                            </div>
                        ))}
                    />
                </Card>
            </div>
        );
    }
}
