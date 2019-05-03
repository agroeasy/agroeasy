import { effects } from 'redux-saga';

import App from '../app';
import { updateProductDetails, updateProductList } from './actions';
import { REQUEST_PRODUCT_LIST, REQUEST_PRODUCT_UPDATE } from './actionTypes';

const {
    selectors: { getUserData }
} = App;
const headers = { 'Content-Type': 'application/json' };
/**
 * Handles requesting the list of producer items from the backend
 *
 * @return {Void} - void
 */
function* requestProducersItems() {
    try {
        const { _id } = yield effects.select(getUserData);
        const response = yield fetch(`/product/producerId/${_id}`, {
            headers,
            method: 'GET'
        });

        if (response.ok) {
            const { data } = yield response.json();

            yield effects.put(updateProductList(data));
        } else {
            const result = yield response.json();

            // TODO: update state to reflect error on fetch item list
            // eslint-disable-next-line no-console
            console.log('ERROR', result);
        }
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
    }
}

/**
 * Handles requesting product updates to the backend
 *
 * @param {Object} action - the data sent from the action creator
 * @return {Void} - void
 */
function* requestProducersItemUpdate(action) {
    try {
        // TODO: connect saga generator to backend api
        const { _id } = yield effects.select(getUserData);
        const { payload } = action;
        const product = { ...payload, producerId: _id };

        const response = yield fetch(`/product/update`, {
            body: JSON.stringify(product),
            headers,
            method: 'PUT'
        });

        if (response.ok) {
            const { data } = yield response.json();

            yield effects.put(updateProductDetails(data));
        } else {
            const result = yield response.json();

            // TODO: update state to reflect error on fetch item list
            // eslint-disable-next-line no-console
            console.log('ERROR', result);
        }
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
    }
}

/**
 * @function
 * Watches for the {@link actionTypes.REQUEST_PRODUCT_LIST REQUEST_PRODUCT_LIST} action.
 * Triggers request to pull the products list of items
 *
 * @return {void}
 */
function* watchRequestProductList() {
    try {
        yield effects.takeLatest(REQUEST_PRODUCT_LIST, requestProducersItems);
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
    }
}

/**
 * @function
 * Watches for the {@link actionTypes.REQUEST_PRODUCT_UPDATE REQUEST_PRODUCT_UPDATE} action.
 * Triggers request to update product item
 *
 * @return {void}
 */
function* watchRequestProductUpdate() {
    try {
        yield effects.takeLatest(REQUEST_PRODUCT_UPDATE, requestProducersItemUpdate);
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
    }
}

export default function*() {
    yield effects.all([watchRequestProductList(), watchRequestProductUpdate()]);
}
