import { REQUEST_SEARCH, UPDATE_SEARCH } from './actionTypes';

/**
 * Triggers request to capture the search string and term from the user
 *
 * @function
 * @return {Object} The {@link actionTypes.REQUEST_SEARCH REQUEST_SEARCH}
 * action.
 */
export const searchQuery = payload => ({
    payload,
    type: REQUEST_SEARCH,
});

/**
 * Triggers request to update state with search result
 *
 * @function
 * @return {Object} The {@link actionTypes.UPDATE_SEARCH UPDATE_SEARCH}
 * action.
 */
export const updateSearchResult = payload => ({
    payload,
    type: UPDATE_SEARCH,
});
