import PropTypes from 'prop-types';
import React from 'react';
import { Form, Input, Modal, Radio, Select } from 'antd';

import { FORM_ITEM_LAYOUT, INPUTS, PRODUCTS, SIGNUP_STRINGS } from '../constants';

const FormItem = Form.Item;
const Option = Select.Option;
const {
    CATEGORIES,
    MESSAGE,
    MODE,
    NO,
    PRODUCER,
    PRODUCT_TYPE,
    RADIO_BUTTONS,
    RADIO_GROUP_FORM,
    SCROLLBAR,
    SMALL,
    SOLID,
    TITLE,
    YES,
} = SIGNUP_STRINGS;

function generateSignupInputs(decorator) {
    return INPUTS.map(({ field, inputType, label, rules }) =>
    {
        <FormItem
            key={field}
            {...FORM_ITEM_LAYOUT}
            label={label}
        >
            {
                decorator(field, {
                    rules,
                })(
                    <Input type={inputType} />
                )
            }
        </FormItem>;
    }
    );
}

function handleChange(value) {
    return value;
}

function generateFilterOption(input, option) { 
    const children = option.props.children.toLowerCase();
    const currInput = input.toLowerCase();
    return children.indexOf(currInput) >= 0;
}

class SignupModal extends React.Component {
    state = {
        isProducer: false,
    };

    toggleIsProducer = e => {
        this.setState ({
            isProducer: e.target.value,
        });
    }

    render() {
        const { form, onCancel, onCreate, visible } = this.props;
        const { getFieldDecorator } = form;
        const { isProducer } = this.state;
        const createCategories = PRODUCTS.map(({ category, value }) =>
            <Option key={value} >{category}</Option> 
        );

        return (
            <Modal
                visible={visible}
                title={TITLE}
                okText={TITLE}
                onCancel={onCancel}
                onOk={onCreate}
                className={SCROLLBAR}
            >
                <Form>
                    <FormItem className={RADIO_GROUP_FORM}>
                        {PRODUCER}
                        <Radio.Group 
                            defaultValue={false}
                            buttonStyle={SOLID}
                            onChange={this.toggleIsProducer}
                            size={SMALL}
                            className={RADIO_BUTTONS}
                        >
                            <Radio.Button value={true}>{YES}</Radio.Button>
                            <Radio.Button value={false}>{NO}</Radio.Button>
                        </Radio.Group>
                    </FormItem>
                    {
                        isProducer &&
                        <FormItem
                            {...FORM_ITEM_LAYOUT}
                            label={PRODUCT_TYPE}
                        >
                            {
                                getFieldDecorator('productType', {
                                    rules:
                                    [{ message: MESSAGE, required: true }],
                                })(
                                    <Select
                                        showSearch
                                        mode={MODE}
                                        placeholder={CATEGORIES}
                                        onChange={handleChange}
                                        filterOption={generateFilterOption}
                                    >
                                        {createCategories}
                                    </Select>
                                )
                            }
                        </FormItem>
                    }
                    {generateSignupInputs(getFieldDecorator)}
                </Form>
            </Modal>
        );
    }
}

const SignupForm = Form.create()(SignupModal);

SignupModal.propTypes = {
    form: PropTypes.object,
    onCancel: PropTypes.func,
    onCreate: PropTypes.func,
    visible: PropTypes.bool,
};

export default SignupForm;

