import React from 'react';
import { Button, Modal } from 'antd';

import { NAV_LINKS, CONTACT_US } from './constants';
import FormContent from './FormContent';

const { BACK, CANCEL, PRIMARY, SMALL, SUBMIT, TITLE } = CONTACT_US;

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
                    width={600}
                    visible={visible}
                    title={TITLE}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={footer}
                >
<<<<<<< HEAD
                    <Form style={{  height: "200px", width: "100px" }}>
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
                                placeholder="email here"
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
=======
                    <FormContent />
>>>>>>> b0fa6727c03e2232be9487d32273ce643602d828
                </Modal>
            </div>
        );
    }
}
