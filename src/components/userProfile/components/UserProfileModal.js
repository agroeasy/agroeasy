import React from 'react';
import { Modal, Form, Input, Row, Col, Tooltip, Icon } from 'antd';

import { USER_PAGE } from '../constants';

const {
    CLASSNAMES: { HEADER_INFO, INFO_DIV, ROW_CONTAINER, TITLE },
    STRINGS: { ADDRESS, EMAIL, CITY, COUNTRY, FIRST_NAME, LAST_NAME, PHONE, USERNAME },
    TEXTS: { BASIC_INFO_TEXT, CONTACT_INFO_TEXT, LOCATION_INFO_TEXT },
} = USER_PAGE;

const UserProfileModal = Form.create({ name: 'form_in_modal' })(
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
                            field: 'firstName',
                            initialValue: firstName,
                            title: FIRST_NAME,
                        },
                        {
                            field: 'lastName',
                            initialValue: lastName,
                            title: LAST_NAME,
                        },
                        {
                            field: 'username',
                            initialValue: username,
                            title: USERNAME,
                        },
                    ],
                },
                {
                    heading: CONTACT_INFO_TEXT,
                    info: [
                        {
                            field: 'email',
                            initialValue: email,
                            title: EMAIL,
                        },
                        {
                            field: 'phoneNumber',
                            initialValue: phoneNumber,
                            title: PHONE,
                        },
                    ],
                },
                {
                    heading: LOCATION_INFO_TEXT,
                    info: [
                        {
                            field: 'address',
                            initialValue: address,
                            title: ADDRESS,
                        },
                        {
                            field: 'city',
                            initialValue: city,
                            title: CITY,
                        },
                        {
                            field: 'country',
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
                        if (field === 'email') {
                            inputField = <input disabled={true} />;
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
                    width="50%"
                    title="User Profile"
                    okText="Update"
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
