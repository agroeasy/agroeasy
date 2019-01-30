import { MAIL_SENT, MAIL_FAILED, REQUEST_SENDMAIL } from './actionTypes';

/**
 * Triggers request to send mail to agroeasy2018@gmail.com
 *
 * @function
 * @return {Object} The {@link actionTypes.REQUEST_SENDMAIL REQUEST_SENDMAIL} action.
 */
export const sendContactMail = payload => ({
    payload,
    type: REQUEST_SENDMAIL,
});

/**
 * Triggers request to update redux store on successful mail sent
 *
 * @function
 * @return {Object} The {@link actionTypes.MAIL_SENT MAIL_SENT} action.
 */
export const mailSent = data => ({
    data,
    type: MAIL_SENT,
});

/**
 * Triggers request to update redux store on failure to send mail
 * @function
 * @return {Object} The {@link actionTypes.MAIL_FAILED MAIL_FAILED} action.
 */
export const failedToSendmail = error => ({
    error,
    type: MAIL_FAILED,
});
