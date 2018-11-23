import React from 'react';
import { Button, Modal } from 'antd';
import { FormGroup, Form, Input, Label } from 'reactstrap';

import { NAV_LINKS, CONTACT_US } from './constants';

const { BACK, CANCEL, EMAIL, MESSAGE, NAME, PRIMARY, SMALL, SUBMIT, TITLE } = CONTACT_US;

export default class ContactUs extends React.Component {
    state = {
        visible: false,
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleCancel = () => {
        this.setState({ visible: false });
    }

    render() {
        const { visible } = this.state;
        const footer = [
            <Button
                key={SUBMIT}
                type={PRIMARY}
                size={SMALL}
                onClick={this.handleOk}
            >{SUBMIT}</Button>,
            <Button key={BACK} size={SMALL} onClick={this.handleCancel}>{CANCEL}</Button>,
        ];
        return (
            <div>
                <div onClick={this.showModal} className={NAV_LINKS} >{TITLE}</div>
                <Modal
                    visible={visible}
                    title={TITLE}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={footer}
                >
                    <Form>
                        <FormGroup>
                            <Label for="Name">{NAME}</Label>
                            <Input type="text" name="name" id="Name" placeholder="name here" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Email">{EMAIL}</Label>
                            <Input
                                type="email"
                                name="email"
                                id="Email"
                                placeholder="email@josh.com"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Message">{MESSAGE}</Label>
                            <Input
                                type="textarea"
                                name="message"
                                id="Message"
                                placeholder="text here"
                            />
                        </FormGroup>
                    </Form>
                </Modal>
            </div>
        );
    }
}
