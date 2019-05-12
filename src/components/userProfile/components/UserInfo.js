import React from 'react';
import { Card, Divider } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getUserData } from '../selectors';
import { requestUserdata } from '../actions';

import { USER_PAGE } from '../constants';

const { Meta } = Card;
const {
    CLASSNAMES: { CARD_META, DATA_TITLE, HEADER_TITLE, INFO_CARD },
    TEXTS: { CONTACT_INFO_TEXT, LOCATION_INFO_TEXT },
    STRINGS: { ADDRESS, EMAIL, CITY, COUNTRY, PHONE },
} = USER_PAGE;

class UserInfo extends React.Component {

    componentDidMount (){
        const { requestUserdata } = this.props.actions;
        requestUserdata();
    }

    render() {

        const { address, city, country, email, phoneNumber } = this.props.userData;

        const CONTACT = [
            { description: email, title: EMAIL },
            { description: phoneNumber, title: PHONE },
        ];
        const LOCATION= [
            { description: city, title: CITY },
            { description: country, title: COUNTRY },
            { description: address, title: ADDRESS },
        ];

        return (
            <Card
                className={INFO_CARD}
                bordered={false}
            >
                <Meta
                    title={<h4 className={HEADER_TITLE}>{CONTACT_INFO_TEXT}</h4>}
                    description={
                        CONTACT.map(({ description, title }) => (
                            <div key={title} className={DATA_TITLE}>
                                <h4>{title}</h4>
                                <div>
                                    {description}
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
                        LOCATION.map(({ description, title }) => (
                            <div key={title} className={DATA_TITLE}>
                                <h4>{title}</h4>
                                <div>
                                    {description}
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
    actions: PropTypes.object,
    userData: PropTypes.object,
};

const mapStateToProps = state => ({
    userData: getUserData(state),
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ requestUserdata }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);