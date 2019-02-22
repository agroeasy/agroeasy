import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import shallowCompare from 'shallow-equal/objects';

import ProductList from './ProductList';
import ProductEditModal from './ProductEditModal';
import { requestProductList, requestProductUpdate } from '../actions';
import { getProductList } from '../selectors';

/**
 * React component used to display the list of producer products
 */
class ProducerItems extends React.Component {
    state = {
        isModalOpen: false,
        isProductUpdating : false,
        productToEdit: {},
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
            isProductUpdating: false,
            productToEdit: {},
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
        const productToEdit = productList.get(id);

        this.setState({
            isModalOpen: true,
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

            // TODO: Remove setTimeout here once this component has been hooked up
            // to the backend
            setTimeout(() => {
                requestProductUpdate(newProductDetails);
                this.setState({
                    isProductUpdating: false,
                    productToEdit: newProductDetails,
                });
            }, 1500);
        }
    }

    componentDidMount() {
        const { requestProductList } = this.props.actions;

        requestProductList();
    }

    render() {
        const { isModalOpen, isProductUpdating, productToEdit } = this.state;
        const { productList } = this.props;

        return (
            <React.Fragment>
                <ProductList
                    list={[...productList.values()]}
                    openModal={this.openProductModal}
                />
                <ProductEditModal
                    closeModal={this.closeProductModal}
                    isOpen={isModalOpen}
                    isProductUpdating={isProductUpdating}
                    productToEdit={productToEdit}
                    updateProduct={this.sendProductForUpdate}
                />
            </React.Fragment>
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
    actions: bindActionCreators({
        requestProductList,
        requestProductUpdate,
    }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProducerItems);
