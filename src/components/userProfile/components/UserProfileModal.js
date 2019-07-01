import React from 'react';
import { Modal, Form, Input, Row, Col } from 'antd';

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
            const { visible, onCancel, onCreate } = this.props;
            const PROFILE_INFO = [
                {
                    heading: BASIC_INFO_TEXT,
                    info: [{ title: FIRST_NAME }, { title: LAST_NAME }, { title: USERNAME }],
                },
                {
                    heading: CONTACT_INFO_TEXT,
                    info: [{ title: EMAIL }, { title: PHONE }],
                },
                {
                    heading: LOCATION_INFO_TEXT,
                    info: [{ title: ADDRESS }, { title: CITY }, { title: COUNTRY }],
                },
            ];

            const editProfile = PROFILE_INFO.map(({ heading, info }) => (
                <div key={heading} className={INFO_DIV}>
                    <h4 className={HEADER_INFO}>{heading}</h4>
                    {info.map(({ title }) => (
                        <Row gutter={16} key={title} className={ROW_CONTAINER}>
                            <Col span={12} className={TITLE}>
                                {title}
                            </Col>
                            <Col span={12}>
                                <Form>
                                    <Form.Item>
                                        <Input />
                                    </Form.Item>
                                </Form>
                            </Col>
                        </Row>
                    ))}
                </div>
            ));
            return (
                <Modal
                    centered={true}
                    visible={visible}
                    width="40%"
                    title="User Profile"
                    okText="Ok"
                    onCancel={onCancel}
                    onOk={onCreate}
                    className="scroll"
                >
                    <div className="modal">{editProfile}</div>
                </Modal>
            );
        }
    },
);
export default UserProfileModal;
