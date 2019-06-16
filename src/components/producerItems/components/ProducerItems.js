import PropTypes from 'prop-types';
import React from 'react';
import shallowCompare from 'shallow-equal/objects';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, Icon } from 'antd';

import ProductList from './ProductList';
import ProductEditModal from './ProductEditModal';

import { requestProductList, requestProductUpdate } from '../actions';
import { getProductList } from '../selectors';
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
        isProductUpdating: false,
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
    };

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
    };

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
    };

    componentDidMount() {
        const { requestProductList } = this.props.actions;

        requestProductList();
    }

    componentDidUpdate(prevProp) {
        const { productList: newList } = this.props;
        const { productList: oldList } = prevProp;
        const { isProductUpdating } = this.state;
        const hasNewProductList = newList !== oldList && isProductUpdating;

        hasNewProductList && this.closeProductModal();
    }

    render() {
        const { isModalOpen, isNewProduct, isProductUpdating, productToEdit } = this.state;
        const { productList } = this.props;

        return (
            <div className={CONTAINER_CLASS}>
                <Button onClick={() => this.openProductModal()}>
                    <Icon type={TYPE} />
                    {TEXT}
                </Button>
                <ProductList list={[...productList.values()]} openModal={this.openProductModal} />
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
        requestProductList: PropTypes.func,
        requestProductUpdate: PropTypes.func,
    }),
    productList: PropTypes.instanceOf(Map),
};

const mapStateToProps = state => ({
    productList: getProductList(state),
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(
        {
            requestProductList,
            requestProductUpdate,
        },
        dispatch,
    ),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProducerItems);
