import { NAME } from './constants';
/**
 * Fired by the {@link actions.signinRequest signinRequest}
 * action creator.
 *
 * @type {String}
 */
export const SIGNIN_REQUEST = `${NAME}/SIGN_REQUEST`;

/**
 * Fired by the {@link actions.signinSuccess signinSuccess}
 * action creator.
 *
 * @type {String}
 */
export const SIGNIN_SUCCESS = `${NAME}/SIGNIN_SUCCESS`;

/**
 * Fired by the {@link actions.signinFail signinFail}
 * action creator.
 *
 * @type {String}
 */
export const SIGNIN_FAILURE = `${NAME}/SIGNIN_FAILURE`;

/**
 * Fired by the {@link actions.resetState resetState}
 * action creator.
 *
 * @type {String}
 */
export const RESET_STATE = `${NAME}/RESET_STATE`;
