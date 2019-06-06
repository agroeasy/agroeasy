import PropTypes from 'prop-types';
import React from 'react';
import shallowCompare from 'shallow-equal/objects';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { Button, Icon,  message } from 'antd';

import ProductList from './ProductList';
import ProductEditModal from './ProductEditModal';

import {
    requestProductDelete,
    requestProductList,
    requestProductUpdate
} from "../actions";
import { getProductList, getSuccessMessage, getErrorMessage } from '../selectors';
import { DEFAULT_FIELD_VALUES, PRODUCER_ITEM } from '../constants';

const {
    BUTTON: { TEXT, TYPE },
    CONTAINER_CLASS,
} = PRODUCER_ITEM;

/**
 * React component used to display the list of producer products
 */
class ProducerItems extends React.Component {
    state = {
        isModalOpen: false,
        isNewProduct: true,
        isProductUpdating : false,
        productToEdit: DEFAULT_FIELD_VALUES,
    };

    /**
     * Controls closing the ProductEditModal and resets the state
     *
     * @function
     * @return {Void} - void
     */
    closeProductModal = () => {
        this.setState({
            isModalOpen: false,
            isNewProduct: true,
            isProductUpdating: false,
            productToEdit: DEFAULT_FIELD_VALUES,
        });
    }

    /**
     * Controls opening the ProductEditModal by setting the `isModalOpen`
     * and productToEdit values
     *
     * @function
     * @return {Void} - void
     */
    openProductModal = id => {
        const { productList } = this.props;
        const product = productList.get(id);
        let { productToEdit, isNewProduct } = this.state;

        if (product) {
            productToEdit = product;
            isNewProduct = false;
        }

        this.setState({
            isModalOpen: true,
            isNewProduct,
            productToEdit,
        });
    }

    /**
     * Checks to see if the new product details differs from the current product
     * details. Then triggers an action to update the product
     *
     * @function
     * @return {Void} - void
     */
    sendProductForUpdate = newProductDetails => {
        const { requestProductUpdate } = this.props.actions;
        const { productToEdit } = this.state;
        const hasProductBeenUpdated = !shallowCompare(productToEdit, newProductDetails);

        if (hasProductBeenUpdated) {
            this.setState({ isProductUpdating: true });
            requestProductUpdate(newProductDetails);
        }
    }

    confirm = id => {
        const { requestProductDelete } = this.props.actions;
        requestProductDelete({ id });
    };

    cancel = () => {
        message.error("Action Cancelled.");
    };

    componentDidMount() {
        const { requestProductList } = this.props.actions;

        requestProductList();
    }

    componentDidUpdate(prevProp) {
        const { 
            productList: newList, 
            successMessage: newSuccesMessage, 
            errorMessage: newErrorMessage,
        } = this.props;
        const { 
            productList: oldList, 
            successMessage: oldSuccessMessage, 
            errorMessage: oldErrorMessage,
        } = prevProp;
        const { isProductUpdating } = this.state;
        const hasNewProductList = newList !== oldList && isProductUpdating;

        hasNewProductList && this.closeProductModal();
        if (newSuccesMessage != oldSuccessMessage) {
            message.success(newSuccesMessage);
            const { requestProductList } = this.props.actions;
            requestProductList();
        }
        if (newErrorMessage != oldErrorMessage) {
            message.error(newErrorMessage);
            const { requestProductList } = this.props.actions;
            requestProductList();
        }
    }

    render() {
        const { isModalOpen, isNewProduct, isProductUpdating, productToEdit } = this.state;
        const { productList } = this.props;

        return (
            <div className={CONTAINER_CLASS}>
                <Button
                    onClick={() => this.openProductModal()}
                >
                    <Icon type={TYPE} />{TEXT}
                </Button>
                <ProductList
                    list={[...productList.values()]}
                    openModal={this.openProductModal}
                    onConfirm={this.confirm}
                    onCancel={this.cancel}
                />
                <ProductEditModal
                    closeModal={this.closeProductModal}
                    isNewProduct={isNewProduct}
                    isOpen={isModalOpen}
                    isProductUpdating={isProductUpdating}
                    productToEdit={productToEdit}
                    updateProduct={this.sendProductForUpdate}
                />
            </div>
        );
    }
}

ProducerItems.propTypes = {
    actions: PropTypes.shape({
        requestProductDelete: PropTypes.func,
        requestProductList: PropTypes.func,
        requestProductUpdate: PropTypes.func,
    }),
    errorMessage: PropTypes.string,
    productList: PropTypes.instanceOf(Map),
    successMessage: PropTypes.string,
};

const mapStateToProps = state => ({
    errorMessage: getErrorMessage(state),
    productList: getProductList(state),
    successMessage: getSuccessMessage(state),
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        requestProductDelete,
        requestProductList,
        requestProductUpdate,
    }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProducerItems);
