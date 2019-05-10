import React from 'react';
import { Avatar, Card } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getUserData } from '../selectors';

import { USER_PAGE } from '../constants';

const { Meta } = Card;
const {
    CLASSNAMES: { AVATAR, AVATAR_CARD, BASIC_INFO, HEADER_TITLE },
    PROFILE_PIX,
    STRINGS: { SQUARE },
    TEXTS: { BASIC_INFO_TEXT },
} = USER_PAGE;

class UserAvatar extends React.Component {

    render() {

        //const { user } = this.props.userData.data;
        const user = {
            firstName: "test0", lastName: "test1", username:"test2"
        }
        const { firstName, lastName, username } = user;

        const BASIC_INFOMATION = [
            { description: firstName, title: "First Name" },
            { description: lastName, title: "Last Name" },
            { description: username, title: "Username" },
        ];

        return(
            <div>
                <Avatar
                    className={AVATAR}
                    src={PROFILE_PIX}
                    shape={SQUARE}
                />
                <Card bordered={false} className={AVATAR_CARD}>
                    <Meta
                        title={<h4 className={HEADER_TITLE}>{BASIC_INFO_TEXT}</h4>}
                        description={
                            BASIC_INFOMATION.map(({ description, title }) => (
                                <div key={title} className={BASIC_INFO}>
                                    <b>{title}</b>
                                    <div>{description}</div>
                                </div>
                            ))
                        }
                    />
                </Card>
            </div>
        );
    }
}

UserAvatar.propTypes = {
    userData: PropTypes.object,
};

const mapStateToProps = state => ({
    userData: getUserData(state),
});

export default connect(mapStateToProps)(UserAvatar);
