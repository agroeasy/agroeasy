import React from 'react';
import { Col, Form, Icon, Input, Row } from 'antd';

const FormItem = Form.Item;
const { TextArea } = Input;

class FormContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
        };
    }
    emitEmpty = () => {
        this.userNameInput.focus();
        this.setState({ userName: '' });
    }
    onChangeUserName = e => {
        this.setState({ userName: e.target.value });
    }
    email = e => {
        this.setState({ email: e.target.value });
    }
    render() {
        const { userName } = this.state;
        const { email } = this.state;
        const suffix = name ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
        return(
            <Row type="flex"justify="center"> 
                <Col span={20}>
                    <FormItem >   
                        <Input
                            placeholder="Enter your username"
                            prefix={<Icon type="user" />}
                            suffix={suffix}
                            value={userName}
                            onChange={this.onChangeUserName}
                        />
                    </FormItem>
                    <FormItem>
                        <Input
                            placeholder="please input your email"
                            prefix={<Icon type="mail" />}
                            value={email}
                            onChange={this.email}
                        />
                    </FormItem>
                    <FormItem>
                        <TextArea rows={3} 
                            placeholder="Comment"
                        />
                    </FormItem>
                </Col>
            </Row>

        );
    }
}

export default FormContent;
