import React from 'react';
import { Avatar, Card, Col, Icon, Row, Button } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import App from '../../app';
import UserProfileModal from './UserProfileModal';
import { USER_PAGE } from '../constants';

const {
    selectors: { getUserData },
} = App;

const {
    CLASSNAMES: {
        EDIT_BOTTON,
        EDIT_PROFILE_BUTTON,
        HEADER_INFO,
        IMAGE_CONTAINER,
        INFO_CARD,
        INFO_DIV,
        PROFILE_IMAGE,
        ROW_CONTAINER,
        TITLE,
    },
    PROFILE_PIX,
    STRINGS: {
        ADDRESS,
        DEFAULT,
        EMAIL,
        CITY,
        COUNTRY,
        EDIT,
        FIRST_NAME,
        GHOST,
        LAST_NAME,
        PHONE,
        PRIMARY,
        SMALL,
        SQUARE,
        USERNAME,
    },
    TEXTS: { BASIC_INFO_TEXT, CONTACT_INFO_TEXT, EDIT_PHOTO, EDIT_PROFILE, LOCATION_INFO_TEXT },
} = USER_PAGE;

// react component used to render user information
class UserInfo extends React.Component {
    state = {
        visible: false,
    };

    showModal = () => {
        this.setState({ visible: true });
    };

    handleCancel = () => {
        this.setState({ visible: false });
    };

    handleCreate = () => {
        const { form } = this.formRef.props;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }

            // console.log('Received values of form: ', values);
            form.resetFields();
            this.setState({ visible: false });
        });
    };

    saveFormRef = formRef => {
        this.formRef = formRef;
    };

    generateProfileInfo() {
        const {
            address,
            city,
            country,
            email,
            firstName,
            lastName,
            phoneNumber,
            username,
        } = this.props.userData;
        //This is the user information
        const PROFILE_INFO = [
            {
                heading: BASIC_INFO_TEXT,
                info: [
                    { description: firstName, title: FIRST_NAME },
                    { description: lastName, title: LAST_NAME },
                    { description: username, title: USERNAME },
                ],
            },
            {
                heading: CONTACT_INFO_TEXT,
                info: [
                    { description: email, title: EMAIL },
                    { description: phoneNumber, title: PHONE },
                ],
            },
            {
                heading: LOCATION_INFO_TEXT,
                info: [
                    { description: address, title: ADDRESS },
                    { description: city, title: CITY },
                    { description: country, title: COUNTRY },
                ],
            },
        ];

        // mapping various user information
        return PROFILE_INFO.map(({ heading, info }) => (
            <div key={heading} className={INFO_DIV}>
                <h4 className={HEADER_INFO}>{heading}</h4>
                {info.map(({ description, title }) => (
                    <Row gutter={16} key={title} className={ROW_CONTAINER}>
                        <Col span={12} className={TITLE}>
                            {title}
                        </Col>
                        <Col span={12}>{description}</Col>
                    </Row>
                ))}
            </div>
        ));
    }

    render() {
        const profile = this.generateProfileInfo();
        const { visible } = this.state;
        return (
            <Card className={INFO_CARD} bordered={false}>
                <div className={IMAGE_CONTAINER}>
                    <Avatar className={PROFILE_IMAGE} src={PROFILE_PIX} size={180} shape={SQUARE} />
                    <Button type={GHOST} size={SMALL} className={EDIT_BOTTON}>
                        {EDIT_PHOTO}
                        <Icon type={EDIT} />
                    </Button>
                </div>
                {profile}
                <Button
                    type={PRIMARY}
                    size={DEFAULT}
                    className={EDIT_PROFILE_BUTTON}
                    onClick={this.showModal}
                >
                    {EDIT_PROFILE}
                </Button>
                {visible && (
                    <UserProfileModal
                        wrappedComponentRef={this.saveFormRef}
                        visible={visible}
                        onCancel={this.handleCancel}
                        onCreate={this.handleCreate}
                    />
                )}
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
