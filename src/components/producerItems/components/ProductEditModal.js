import PropTypes from 'prop-types';
import React from 'react';
import { Icon, Form, Input, InputNumber, Modal, Select, Upload, message } from 'antd';

import {
    CREATE_TITLE,
    CLEARFIX,
    DONE,
    EDIT_TITLE,
    EDITABLE_FIELDS,
    ERROR,
    FORM_ITEM_LAYOUT,
    IMAGE,
    IMAGE_WIDTH,
    MODAL_FIELDS,
    NUM_OF_IMAGES,
    PLUS,
    PICTURE_CARD,
    TEXT,
    UPLOADING,
    UPLOADED,
    UPLOAD_FAILED,
    UPLOAD_TEXT,
    CREATE_IMAGE_ENDPOINT,
    SAVE_PRODUCT_DETAILS,
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
            let InputField = <Input />;

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
                        {options.map(option => (
                            <Option key={option}>{option}</Option>
                        ))}
                    </Select>
                );
            }

            const formItem = (
                <FormItem {...FORM_ITEM_LAYOUT} key={field} label={label}>
                    {decorator(field, { initialValue, rules })(InputField)}
                </FormItem>
            );
            field === NAME ? total.unshift(formItem) : total.push(formItem);
        }
        return total;
    }, []);
}

/**
 * React component used to render the product eidtable fields
 */
class ProductEditForm extends React.Component {
    state = {
        fileDetails: [],
        formItems: [],
        previewImage: '',
        previewVisible: false,
    };

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
        const { fileDetails } = this.state;

        if (fileDetails.length >= 1) {
            const { imageUrl, imageId } = fileDetails[0].response.data;

            validateFields((error, fieldValues) => {
                if (error) {
                    return error;
                }
                updateProduct({ ...productToEdit, ...fieldValues, imageId, imageUrl });
                return resetFields();
            });
        } else {
            validateFields((error, fieldValues) => {
                if (error) {
                    return error;
                }
                updateProduct({ ...productToEdit, ...fieldValues });
                return resetFields();
            });
        }
    };

    setPreview = value => this.setState({ previewVisible: value });

    handleRemove = () => this.setState({ fileDetails: [] });

    handleChange = info => {
        const {
            fileList,
            thumbUrl,
            file: {
                status,
                response: { data },
                name,
            },
        } = info;

        if (status !== UPLOADING) {
            this.setState({ previewImage: data.imageUrl || thumbUrl });
        }
        if (status === DONE) {
            this.setState({ fileDetails: fileList });
            message.success(`${name} ${UPLOADED}`);
        } else if (status === ERROR) {
            message.error(`${name} ${UPLOAD_FAILED}`);
        }
    };

    static getDerivedStateFromProps(props) {
        const {
            productToEdit,
            form: { getFieldDecorator },
        } = props;
        const formItems = generateProductEditForm(getFieldDecorator, productToEdit);

        return { formItems };
    }

    render() {
        const { closeModal, isNewProduct, isOpen, isProductUpdating } = this.props;
        const { formItems, previewVisible, previewImage, fileDetails } = this.state;
        const title = isNewProduct ? CREATE_TITLE : EDIT_TITLE;

        const uploadButton = (
            <React.Fragment>
                <Icon type={PLUS} />
                <div className={UPLOAD_TEXT}>{TEXT}</div>
            </React.Fragment>
        );

        const props = {
            action: CREATE_IMAGE_ENDPOINT,
            listType: PICTURE_CARD,
            multiple: false,
            name: IMAGE,
            onChange: this.handleChange,
            onPreview: () => this.setPreview(true),
            onRemove: this.handleRemove,
        };

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
                <div className={CLEARFIX}>
                    <Upload {...props}>
                        {fileDetails.length <= NUM_OF_IMAGES && uploadButton}
                    </Upload>

                    <Modal
                        visible={previewVisible}
                        footer={null}
                        onCancel={() => this.setPreview(false)}
                    >
                        <img className={IMAGE_WIDTH} src={previewImage} />
                    </Modal>
                </div>
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
