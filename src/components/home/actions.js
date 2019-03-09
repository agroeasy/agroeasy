import { REQUEST_SEARCH, UPDATE_SEARCH } from './actionTypes';

export const searchQuery = payload => ({
    payload,
    type: REQUEST_SEARCH,
});

export const updateSearchResult = payload => ({
    payload,
    type: UPDATE_SEARCH,
});
