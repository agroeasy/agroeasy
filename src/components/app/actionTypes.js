import { NAME } from './constants';
/**
 * Fired by the {@link actions.getUserData getUserData}
 * action creator.
 *
 * @type {String}
 */export const GET_USER_DATA = `${NAME}/GET_USER_DATA`;

/**
 * Fired by the {@link actions.userDataNotFound userDataNotFound}
 * action creator.
 *
 * @type {String}
 */
export const USER_DATA_NOT_FOUND = `${NAME}/USER_DATA_NOT_FOUND`;

export const SET_LOGIN_STATUS = `${NAME}/SET_LOGIN_STATUS`;
