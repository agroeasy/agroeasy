import { NAME } from './constants';

/**
 * Fired by the {@link actions.requestProductList requestProductList}
 * action creator.
 *
 * @type {String}
 */
export const REQUEST_PRODUCT_LIST = `${NAME}/REQUEST_PRODUCT_LIST`;

/**
 * Fired by the {@link actions.requestProductUpdate requestProductUpdate}
 * action creator.
 *
 * @type {String}
 */
export const REQUEST_PRODUCT_UPDATE = `${NAME}/REQUEST_PRODUCT_UPDATE`;

/**
 * Fired by the {@link actions.requestProductDelete requestProductDelete}
 * action creator.
 *
 * @type {String}
 */
export const REQUEST_PRODUCT_DELETE = `${NAME}/REQUEST_PRODUCT_DELETE`;

/**
 * Fired by the {@link actions.updateProductDetails updateProductDetails}
 * action creator.
 *
 * @type {String}
 */
export const UPDATE_PRODUCT_DETAILS = `${NAME}/UPDATE_PRODUCT_DETAILS`;

/**
 * Fired by the {@link actions.updateProductList updateProductList}
 * action creator.
 *
 * @type {String}
 */
export const UPDATE_PRODUCT_LIST = `${NAME}/UPDATE_PRODUCT_LIST`;

/**
 * Fired by the {@link actions.successMessage successMessage}
 * action creator.
 *
 * @type {String}
 */
export const SUCCESS_MESSAGE = `${NAME}/SUCCESS_MESSAGE`;

/**
 * Fired by the {@link actions.errorMessage errorMessage}
 * action creator.
 *
 * @type {String}
 */
export const ERROR_MESSAGE = `${NAME}/ERROR_MESSAGE`;
