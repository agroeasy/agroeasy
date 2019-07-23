import React from 'react';
import { Modal, Form, Icon, Input, Row, Col, Tooltip } from 'antd';

import { PROFILE_INFO, USER_PAGE } from '../constants';

const {
    CLASSNAMES: { HEADER_INFO, INFO_DIV, ROW_CONTAINER, TITLE },
    FIELD_EMAIL,
    STRINGS: {
        EDIT_USER_PROFILE,
        FORM_IN_MODAL,
        INFO_CIRCLE,
        MODAL_WIDTH,
        NOT_EDITABLE_TEXT,
        UPDATE,
    },
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
                userData,
            } = this.props;

            let inputField;
            const editProfile = PROFILE_INFO.map(({ heading, info }) => (
                <div key={heading} className={INFO_DIV}>
                    <h4 className={HEADER_INFO}>{heading}</h4>
                    {info.map(({ title, field }) => {
                        const initialValue = userData[field];

                        if (field === FIELD_EMAIL) {
                            inputField = (
                                <Input
                                    disabled
                                    suffix={
                                        <Tooltip title={NOT_EDITABLE_TEXT}>
                                            <Icon type={INFO_CIRCLE} className="tooltip-icon" />
                                        </Tooltip>
                                    }
                                />
                            );
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
