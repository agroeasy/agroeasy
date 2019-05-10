import React from 'react';
import { Card, Divider } from 'antd';
import PropTypes from 'prop-types';
import { USER_PAGE } from '../constants';
import { connect } from 'react-redux';

import { getUserData } from '../selectors';

const { Meta } = Card;
const {
    CLASSNAMES: { CARD_META, DATA_TITLE, HEADER_TITLE, INFO_CARD },
    TEXTS: { CONTACT_INFO_TEXT, LOCATION_INFO_TEXT },
} = USER_PAGE;

class UserInfo extends React.Component {

    render() {

        const { user } = this.props.userData.data;
        const { address, city, country, email, phoneNumber } = user;

        const CONTACT = [
            { description: email, title: "Email" },
            { description: phoneNumber, title: "Phone" },
        ];
        const LOCATION= [
            { description: city, title: "City" },
            { description: country, title: "Country" },
            { description: address, title: "Address" },
        ];
        return (
            <Card
                className={INFO_CARD}
                bordered={false}
            >
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
            </Card>
        );
    }
}

UserInfo.propTypes = {
    userData: PropTypes.object,
};

const mapStateToProps = state => ({
    userData: getUserData(state),
});

export default connect(mapStateToProps)(UserInfo);
