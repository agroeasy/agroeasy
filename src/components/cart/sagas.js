import { effects } from 'redux-saga';

import App from '../app';

import { setCart, successMessage, errorMessage } from './actions';

import {
    ADD_ITEM_TO_CART,
    DELETE_ITEMS_IN_CART,
    DELETE_ITEM_IN_CART,
    UPDATE_ITEM_IN_CART,
    GET_USER_CART_ITEMS,
} from './actionTypes';

// const {
//     selectors: { getUserData },
// } = App;

const headers = { 'Content-Type': 'application/json' };

import { CART_URL } from './constants';

/**
 * Handles requesting the list of producer items from the backend
 *
 * @return {Void} - void
 */
function* addItemToCartRequest({ payload }) {
    try {
        const { _id } = yield effects.select(getUserData);
        const response = yield fetch(`${CART_URL}/add`, {
            body: JSON.parse({
                amount: payload.amount,
                product: payload.product,
                user: _id,
            }),
            headers,
            method: 'POST',
        });

        if (response.ok) {
            const { data } = yield response.json();
            yield effects.put(setCart(data.cartData));
            yield effects.put(successMessage(data.message));
        } else {
            const result = yield response.json();
            console.log('ERROR', result);
            yield effects.put(errorMessage(result));
        }
    } catch (error) {
        console.log(error);
        yield effects.put(errorMessage(error));
    }
}

/**
 * Handles requesting the list of producer items from the backend
 *
 * @return {Void} - void
 */
function* deleteItemsInCartRequest() {
    try {
        const { _id } = yield effects.select(getUserData);
        const response = yield fetch(`${CART_URL}/clear/${_id}`, {
            headers,
            method: 'DELETE',
        });

        if (response.ok) {
            const { data } = yield response.json();
            yield effects.put(setCart(data.cart));
            yield effects.put(successMessage(data.message));
        } else {
            const result = yield response.json();
            console.log('ERROR', result);
            yield effects.put(errorMessage(result));
        }
    } catch (error) {
        console.log(error);
        yield effects.put(errorMessage(error));
    }
}

/**
 * Handles requesting the list of producer items from the backend
 *
 * @return {Void} - void
 */
function* deleteItemInCartRequest({ payload }) {
    try {
        const { _id } = payload;
        const response = yield fetch(`${CART_URL}/remove${_id}`, {
            headers,
            method: 'DELETE',
        });

        if (response.ok) {
            const { data } = yield response.json();
            yield effects.put(setCart(data.cart));
            yield effects.put(successMessage(data.message));
        } else {
            const result = yield response.json();
            console.log('ERROR', result);
            yield effects.put(errorMessage(result));
        }
    } catch (error) {
        console.log(error);
        yield effects.put(errorMessage(error));
    }
}

/**
 * Handles requesting the list of producer items from the backend
 *
 * @return {Void} - void
 */
function* updateItemInCartRequest({ payload }) {
    try {
        const { _id } = payload;
        const response = yield fetch(`${CART_URL}/${_id}`, {
            headers,
            method: 'PUT',
        });

        if (response.ok) {
            const { data } = yield response.json();
            yield effects.put(setCart(data.cart));
            yield effects.put(successMessage(data.message));
        } else {
            const result = yield response.json();
            console.log('ERROR', result);
            yield effects.put(errorMessage(result));
        }
    } catch (error) {
        console.log(error);
        yield effects.put(errorMessage(error));
    }
}

/**
 * Handles requesting the list of producer items from the backend
 *
 * @return {Void} - void
 */
function* getUserCartItemsRequest() {
    try {
        const { _id } = yield effects.select(getUserData);
        const response = yield fetch(`${CART_URL}/fetch/${_id}`, {
            headers,
            method: 'GET',
        });

        if (response.ok) {
            const { data } = yield response.json();
            yield effects.put(setCart(data.cart));
            yield effects.put(successMessage(data.message));
        } else {
            const result = yield response.json();
            console.log('ERROR', result);
            yield effects.put(errorMessage(result));
        }
    } catch (error) {
        console.log(error);
        yield effects.put(errorMessage(error));
    }
}

/**
 * @function
 * Watches for the {@link actionTypes.ADD_ITEM_TO_CART ADD_ITEM_TO_CART} action.
 * Triggers request to pull the products list of items
 *
 * @return {void}
 */
function* watchAddItemToCartRequest() {
    try {
        yield effects.takeLatest(ADD_ITEM_TO_CART, addItemToCartRequest);
    } catch (error) {
        console.log(error);
    }
}

/**
 * @function
 * Watches for the {@link actionTypes.DELETE_ITEMS_IN_CART DELETE_ITEMS_IN_CART} action.
 * Triggers request to pull the products list of items
 *
 * @return {void}
 */
function* watchDeleteItemsInCartRequest() {
    try {
        yield effects.takeLatest(DELETE_ITEMS_IN_CART, deleteItemsInCartRequest);
    } catch (error) {
        console.log(error);
    }
}

/**
 * @function
 * Watches for the {@link actionTypes.DELETE_ITEM_IN_CART DELETE_ITEM_IN_CART} action.
 * Triggers request to pull the products list of items
 *
 * @return {void}
 */
function* watchDeleteItemInCartRequest() {
    try {
        yield effects.takeLatest(DELETE_ITEMS_IN_CART, deleteItemInCartRequest);
    } catch (error) {
        console.log(error);
    }
}

/**
 * @function
 * Watches for the {@link actionTypes.UPDATE_ITEM_IN_CART UPDATE_ITEM_IN_CART} action.
 * Triggers request to pull the products list of items
 *
 * @return {void}
 */
function* watchUpdateItemInCartRequest() {
    try {
        yield effects.takeLatest(UPDATE_ITEM_IN_CART, updateItemInCartRequest);
    } catch (error) {
        console.log(error);
    }
}

/**
 * @function
 * Watches for the {@link actionTypes.GET_USER_CART_ITEMS GET_USER_CART_ITEMS} action.
 * Triggers request to pull the products list of items
 *
 * @return {void}
 */
function* watchGetUserCartItemsRequest() {
    try {
        yield effects.takeLatest(GET_USER_CART_ITEMS, getUserCartItemsRequest);
    } catch (error) {
        console.log(error);
    }
}

export default function*() {
    yield effects.all([
        watchAddItemToCartRequest(),
        watchDeleteItemsInCartRequest(),
        watchDeleteItemInCartRequest(),
        watchUpdateItemInCartRequest(),
        watchGetUserCartItemsRequest(),
    ]);
}
