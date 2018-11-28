import React from 'react';
import { Butto, Col, Form, Input, Row } from 'antd';

const FormItem = Form.Item;

class FormContent extends React.Component {
   
    render() {
        return(
            <Row type="flex"justify="center"> 
                <Col span={7}>
                    <FormItem >   
                        <Input type="name" placeholder="Please input your name" />
                    </FormItem>
                    <FormItem>
                        <Input type="email" placeholder="please input your email" />
                    </FormItem>
                    <FormItem>
                        <Input type="text" placeholder="comment" />
                    </FormItem>
                </Col>
            </Row>

        );
    }
}

export default FormContent;
