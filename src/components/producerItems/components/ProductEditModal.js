import PropTypes from 'prop-types';
import React from 'react';
import { Form, Input, Modal } from 'antd';

import {
    DEFAULT_FIRST_FIELD,
    EDIT_FORM_TITLE,
    EDITABLE_FIELDS,
    FORM_ITEM_LAYOUT,
    SAVE_PRODUCT_DETAILS
} from '../constants';

const FormItem = Form.Item;

/**
 * Helper function used to generate input fields for `ProductEditForm`.
 * It makes sure that the title/name field is at the beginning of the edit form
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
            const { label, rules } = editableField;
            const formItem = (
                <FormItem
                    {...FORM_ITEM_LAYOUT}
                    key={field}
                    label={label}
                >
                    { decorator(field, { initialValue, rules })(<Input />) }
                </FormItem>
            );

            field === DEFAULT_FIRST_FIELD ? total.unshift(formItem) : total.push(formItem);
        }

        return total;
    }, []);
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

        form.validateFields((error, productValues ) => error ?
            error :
            updateProduct({ ...productToEdit, ...productValues })
        );
    }

    static getDerivedStateFromProps(props) {
        const { productToEdit, form: { getFieldDecorator } } = props;
        const formItems = generateProductEditForm(getFieldDecorator, productToEdit);

        return { formItems };
    }

    render() {
        const { closeModal, isOpen, isProductUpdating } = this.props;
        const { formItems } = this.state;

        return (
            <Modal
                confirmLoading={isProductUpdating}
                visible={isOpen}
                title={EDIT_FORM_TITLE}
                okText={SAVE_PRODUCT_DETAILS}
                onCancel={closeModal}
                onOk={this.updateProductInfo}
            >
                <Form>{formItems}</Form>
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
    isOpen: PropTypes.bool,
    isProductUpdating: PropTypes.bool,
    productToEdit: PropTypes.object,
    updateProduct: PropTypes.func,
};

export default ProductEditModal;
