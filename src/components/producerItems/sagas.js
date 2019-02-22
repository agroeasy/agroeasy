import { effects } from 'redux-saga';

import { REQUEST_PRODUCT_LIST, REQUEST_PRODUCT_UPDATE } from './actionTypes';
import { getFakeData } from './selectors';
import { updateProductDetails, updateProductList } from './actions';

/**
 * Handles requesting the list of producer items from the backend
 *
 * @return {Void} - void
 */
function* requestProducersItems(){
    try {
        // TODO: connect saga generator to backend api
        // for now use fake data
        const productList = yield effects.select(getFakeData);
        yield effects.put(updateProductList(productList));
    } catch(error){
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
function* requestProducersItemUpdate(action){
    try {
        // TODO: connect saga generator to backend api
        const { payload } = action;
        yield effects.put(updateProductDetails(payload));
    } catch(error){
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
function* watchRequestProductList(){
    try {
        yield effects.takeLatest(REQUEST_PRODUCT_LIST, requestProducersItems);
    } catch(error){
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
function* watchRequestProductUpdate(){
    try {
        yield effects.takeLatest(REQUEST_PRODUCT_UPDATE, requestProducersItemUpdate);
    } catch(error){
        // eslint-disable-next-line no-console
        console.log(error);
    }
}

export default function* (){
    yield effects.all([
        watchRequestProductList(),
        watchRequestProductUpdate(),
    ]);
}
