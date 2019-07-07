import React from 'react';
import { Modal, Form, Input, Row, Col } from 'antd';

import { USER_PAGE } from '../constants';

const {
    CLASSNAMES: { HEADER_INFO, INFO_DIV, ROW_CONTAINER, TITLE },
    FIELDS: {
        FIRSTNAME,
        FIELD_EMAIL,
        FIELD_ADDRESS,
        FIELD_CITY,
        FIELD_COUNTRY,
        LASTNAME,
        PHONE_NUMBER,
    },
    STRINGS: {
        ADDRESS,
        EDIT_USER_PROFILE,
        EMAIL,
        CITY,
        COUNTRY,
        FIRST_NAME,
        FORM_IN_MODAL,
        LAST_NAME,
        MODAL_WIDTH,
        PHONE,
        UPDATE,
        USERNAME,
    },
    TEXTS: { BASIC_INFO_TEXT, CONTACT_INFO_TEXT, LOCATION_INFO_TEXT },
} = USER_PAGE;

const UserProfileModal = Form.create({ name: FORM_IN_MODAL })(
    //   eslint-disable-next-line
    class extends React.Component {
        render() {
            const {
                form: { getFieldDecorator },
                visible,
                onCancel,
                onCreate,
                userData: {
                    address,
                    city,
                    country,
                    email,
                    firstName,
                    lastName,
                    phoneNumber,
                    username,
                },
            } = this.props;

            const PROFILE_INFO = [
                {
                    heading: BASIC_INFO_TEXT,
                    info: [
                        {
                            field: FIRSTNAME,
                            initialValue: firstName,
                            title: FIRST_NAME,
                        },
                        {
                            field: LASTNAME,
                            initialValue: lastName,
                            title: LAST_NAME,
                        },
                        {
                            field: USERNAME,
                            initialValue: username,
                            title: USERNAME,
                        },
                    ],
                },
                {
                    heading: CONTACT_INFO_TEXT,
                    info: [
                        {
                            field: FIELD_EMAIL,
                            initialValue: email,
                            title: EMAIL,
                        },
                        {
                            field: PHONE_NUMBER,
                            initialValue: phoneNumber,
                            title: PHONE,
                        },
                    ],
                },
                {
                    heading: LOCATION_INFO_TEXT,
                    info: [
                        {
                            field: FIELD_ADDRESS,
                            initialValue: address,
                            title: ADDRESS,
                        },
                        {
                            field: FIELD_CITY,
                            initialValue: city,
                            title: CITY,
                        },
                        {
                            field: FIELD_COUNTRY,
                            initialValue: country,
                            title: COUNTRY,
                        },
                    ],
                },
            ];

            let inputField;
            const editProfile = PROFILE_INFO.map(({ heading, info }) => (
                <div key={heading} className={INFO_DIV}>
                    <h4 className={HEADER_INFO}>{heading}</h4>
                    {info.map(({ title, initialValue, field }) => {
                        if (field === FIELD_EMAIL) {
                            inputField = <Input disabled={true} />;
                        } else {
                            inputField = <Input />;
                        }
                        return (
                            <Row gutter={16} key={title} className={ROW_CONTAINER}>
                                <Col span={12} className={TITLE}>
                                    {title}
                                </Col>
                                <Col span={12}>
                                    <Form.Item key={field}>
                                        {getFieldDecorator(field, { initialValue })(inputField)}
                                    </Form.Item>
                                </Col>
                            </Row>
                        );
                    })}
                </div>
            ));
            return (
                <Modal
                    centered={true}
                    visible={visible}
                    width={MODAL_WIDTH}
                    title={EDIT_USER_PROFILE}
                    okText={UPDATE}
                    onCancel={onCancel}
                    onOk={onCreate}
                    className="scroll"
                >
                    <div className="modal">
                        <Form>{editProfile} </Form>
                    </div>
                </Modal>
            );
        }
    },
);
export default UserProfileModal;
