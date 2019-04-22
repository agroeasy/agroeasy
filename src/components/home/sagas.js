import { effects } from 'redux-saga';
import {  REQUEST_SEARCH } from './actionTypes';
import { SEARCH_URL } from './constants';
import { updateSearchResult } from './actions';

function* searchProduct(action) {
    try {
        const { payload } = action;
        const response = yield fetch(`${SEARCH_URL}?name=${payload}`, {
            method: 'GET',
        });

        if(response.ok){
            const data = yield response.json();
            yield effects.put(updateSearchResult(data));
        }
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
    } 
}

function* watchSearchProduct() {
    try {
        yield effects.takeLatest(REQUEST_SEARCH, searchProduct);
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
    }
}

export default function* () {
    yield effects.all([
        watchSearchProduct(),
    ]);
}
