import React from 'react';
import { Card, Divider, Button } from 'antd';

import { CONTACT, LOCATION, USER_PAGE } from '../constants';
import Auth from '../../auth0/Auth';

const { Meta } = Card;
const {
    CLASSNAMES: { CARD_META, DATA_TITLE, HEADER_TITLE, INFO_CARD },
    TEXTS: { CONTACT_INFO_TEXT, LOCATION_INFO_TEXT },
} = USER_PAGE;

export default class UserInfo extends React.Component {

    logout(){
        const auth = new Auth();
        auth.logout();
    }
    render() {
        return (
            <Card
                className={INFO_CARD}
                bordered={false}
            >
                <Meta
                    title={<h4 className={HEADER_TITLE}>{CONTACT_INFO_TEXT}</h4>}
                    description={
                        CONTACT.map(contact => (
                            <div key={contact.title} className={DATA_TITLE}>
                                <b>{contact.title}</b>
                                <div>
                                    {contact.description}
                                </div>
                            </div>
                        ))
                    }
                />
                <Divider />
                <Meta
                    className={CARD_META}
                    title={<h4 className={HEADER_TITLE}>{LOCATION_INFO_TEXT}</h4>}
                    description={
                        LOCATION.map(location => (
                            <div key={location.title} className={DATA_TITLE}>
                                <b>{location.title}</b>
                                <div>
                                    {location.description}
                                </div>
                            </div>
                        ))
                    }
                />
                <Button onClick={this.logout}>Logout</Button>
            </Card>
        );
    }
}
