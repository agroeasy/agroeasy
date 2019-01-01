import React from 'react';
import { Button, Modal } from 'antd';

import { CONTACT_US } from '../constants';
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
                <div onClick={this.showModal} >{TITLE}</div>
                <Modal
                    width={600}
                    visible={visible}
                    title={TITLE}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={footer}
                >
                    <FormContent />
                </Modal>
            </div>
        );
    }
}
