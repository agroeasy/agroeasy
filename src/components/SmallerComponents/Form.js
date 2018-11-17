import React from 'react';
import PropTypes from 'prop-types';
import { Input, FormGroup, Form, Label } from 'reactstrap';
import { TEXTS } from '../constants';

const { text2, text3, text4 } = TEXTS;
class FillForm extends React.Component {
    render() {
        return(
            <Form>
                <FormGroup>
                    <Label for="exampleName">{text2}</Label>
                    <Input type="text" name="name" id="exampleName" placeholder="name here" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">{text3}</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="email@example.com" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleMessage">{text4}</Label>
                    <Input type="textarea" name="message" id="exampleMessage" placeholder="text here" />
                </FormGroup>
            </Form>
        );
    }
}

FillForm.PropTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    message: PropTypes.string,
};

export default FillForm;