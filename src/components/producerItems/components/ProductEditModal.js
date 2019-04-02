import PropTypes from 'prop-types';
import React from 'react';
import { Icon, Form, Input, InputNumber, Modal, Select, Upload, message } from 'antd';
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

        if(this.state.fileDetails.length>=1){
            const { image_url, image_id } = this.state.fileDetails[0].response.data;

            validateFields((error, fieldValues) => {
                if (!error) {
                    updateProduct({ ...productToEdit, ...fieldValues, image_id, image_url });
                    return resetFields();
                }
                return error;
            });
        } else {
            validateFields((error, fieldValues) => {
                if (!error) {
                    updateProduct({ ...productToEdit, ...fieldValues });
                    return resetFields();
                }
                return error;
            });
        }
    }
    
      handleCancel = () => this.setState({ previewVisible: false })
    
      handlePreview = () => this.setState({ previewVisible: true });

      handleRemove = () => this.setState({ fileDetails: [] })
    
      handleChange = info => {
          if (info.file.status !== 'uploading') {
              this.setState({ previewImage: 'info.file.response.data.image_url || info.thumbUrl' });
          }
          if (info.file.status === 'done') {
              this.setState({ fileDetails: info.fileList });
              message.success(`${info.file.name} file uploaded successfully`);
          } else if (info.file.status === 'error') {
              message.error(`${info.file.name} file upload failed.`);
          }
      }

      static getDerivedStateFromProps(props) {
          const { productToEdit, form: { getFieldDecorator } } = props;
          const formItems = generateProductEditForm(getFieldDecorator, productToEdit);

          return { formItems };
      }

      render() {
          const { closeModal, isNewProduct, isOpen, isProductUpdating } = this.props;
          const { formItems, previewVisible, previewImage, fileDetails } = this.state;
          const title = isNewProduct ? CREATE_TITLE : EDIT_TITLE;

          const uploadButton = (
              <div>
                  <Icon type="plus" />
                  <div className="ant-upload-text">{"Add Image"}</div>
              </div>
          );

          const props = {
              action:"http://localhost:4000/api/createImage",
              listType:"picture-card",
              multiple:false,
              name:"image",
              onChange: this.handleChange,
              onPreview: this.handlePreview,
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
                  <div className="clearfix">
                      <Upload {...props}>
                          {fileDetails.length >= 1 ? null : uploadButton}
                      </Upload>

                      <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                          <img alt="example" style={{ width: '100%' }} src={previewImage} />
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
