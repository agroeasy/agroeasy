import { NAME } from './constants';
/**
 * Fired by the {@link actions.setCookie setCookie}
 * action creator.
 *
 * @type {String}
 */
export const SET_COOKIE = 'SET_COOKIE';

/**
 * Fired by the {@link actions.removeCookie removeCookie}
 * action creator.
 *
 * @type {String}
 */export const REMOVE_COOKIE = `${NAME}/REMOVE_COOKIE`;

/**
 * Fired by the {@link actions.resetState resetState}
 * action creator.
 *
 * @type {String}
 */
export const RESET_STATE = `${NAME}/RESET_STATE`;

/**
 * Fired by the {@link actions.resetState resetState}
 * action creator.
 *
 * @type {String}
 */
export const RESET_STATUS_STATE = `${NAME}/RESET_STATUS_STATE`;
