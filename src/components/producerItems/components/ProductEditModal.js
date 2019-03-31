import PropTypes from 'prop-types';
import React from 'react';
import { Button, Icon, Form, Input, InputNumber, Modal, Select, Upload, message } from 'antd';
// import { FilePond } from "react-filepond";

import {
    CREATE_TITLE,
    EDIT_TITLE,
    EDITABLE_FIELDS,
    FORM_ITEM_LAYOUT,
    MODAL_FIELDS,
    SAVE_PRODUCT_DETAILS
} from '../constants';

const FormItem = Form.Item;
const Option = Select.Option;
const { COST, NAME, QUANTITY, TYPE } = MODAL_FIELDS;

/**
 * Helper function used to generate input fields for `ProductEditForm`.
 * It makes sure that the title/name field is at the beginning of the edit form
 * And creates unique input based on the field.
 *
 * @function
 * @param {Function} decorator - sets the appropriate rules and defaults on the
 * input field
 * @param {Object} productToEdit - the product details to edit
 * @return {Array} - a list of field inputs
 */
function generateProductEditForm(decorator, productToEdit) {
    const productFields = Object.entries(productToEdit);

    return productFields.reduce((total, item) => {
        const [field, initialValue] = item;
        const editableField = EDITABLE_FIELDS[field];

        if (editableField) {
            const { label, options, rules } = editableField;
            let InputField = <Input  />;

            if (field === COST) {
                InputField = (
                    <InputNumber
                        formatter={value => `₦ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        min={0}
                        parser={value => value.replace(/₦\s?|(,*)/g, '')}
                    />
                );
            } else if (field === QUANTITY) {
                InputField = <InputNumber min={1} />;
            } else if (field === TYPE) {
                InputField = (
                    <Select>
                        {
                            options.map(option => (
                                <Option key={option}>{option}</Option>
                            ))
                        }
                    </Select>
                );
            }

            const formItem = (
                <FormItem
                    {...FORM_ITEM_LAYOUT}
                    key={field}
                    label={label}
                >
                    { decorator(field, { initialValue, rules })(InputField) }
                </FormItem>
            );

            field === NAME ? total.unshift(formItem) : total.push(formItem);
        }

        return total;
    }, []);
}

function UploadImage() {
    const props = {
        name: 'image',
        action: 'http://localhost:4000/api/createImage',
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        listType: "picture-card",
        multiple: false,
    };
    
    return(
        <Upload {...props}>
            <Button>
                <Icon type="upload" /> {"add product image"}
            </Button>
        </Upload>
    );
} 

/**
 * React component used to render the product eidtable fields
 */
class ProductEditForm extends React.Component {
    state = { formItems: [] };

    /**
     * Validates the the form rules have all passed then sends a request to update
     * the product details
     *
     * @function
     * @return {Void} - void
     */
    updateProductInfo = () => {
        const { form, productToEdit, updateProduct } = this.props;
        const { resetFields, validateFields } = form;

        validateFields((error, fieldValues) => {
            if (!error) {
                updateProduct({ ...productToEdit, ...fieldValues });
                return resetFields();
            }

            return error;
        });
    }

    static getDerivedStateFromProps(props) {
        const { productToEdit, form: { getFieldDecorator } } = props;
        const formItems = generateProductEditForm(getFieldDecorator, productToEdit);

        return { formItems };
    }

    // handlePondFile(error, file) {
    //     if (error) {
    //         console.log('Oh no');
    //         return;
    //     }
    //     console.log('File added', file);
    // }

    render() {
        const { closeModal, isNewProduct, isOpen, isProductUpdating } = this.props;
        const { formItems } = this.state;
        const title = isNewProduct ? CREATE_TITLE : EDIT_TITLE;

        return (
            <Modal
                confirmLoading={isProductUpdating}
                visible={isOpen}
                title={title}
                okText={SAVE_PRODUCT_DETAILS}
                onCancel={closeModal}
                onOk={this.updateProductInfo}
            >
                <Form>{formItems}</Form>
                <UploadImage /> 
                {/*                 <FilePond
                    // Set the callback here.
                    onprocessfile={this.handlePondFile}
                    allowMultiple={false}
                    // maxFiles={1}
                    name="image"
                    server="/api/createImage"
                /> */}
            </Modal>
        );
    }
}

/**
 * React component used to render a modal for editing product fields
 */
const ProductEditModal = Form.create()(ProductEditForm);

ProductEditForm.propTypes = {
    closeModal: PropTypes.func,
    form: PropTypes.object,
    isNewProduct: PropTypes.bool,
    isOpen: PropTypes.bool,
    isProductUpdating: PropTypes.bool,
    productToEdit: PropTypes.object,
    updateProduct: PropTypes.func,
};

export default ProductEditModal;
