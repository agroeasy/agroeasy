import { MAIL_SENT, MAIL_FAILED, REQUEST_SENDMAIL } from './actionTypes';

/**
 * Triggers request to send mail to agroeasy2018@gmail.com
 *
 * @function
 * @param {Object} payload An object containing email, subject and message 
 * captured from body of contact form
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
 * @param {Object} payload An object of the data returned from the endpoint if mail is sent 
 * @return {Object} The {@link actionTypes.MAIL_SENT MAIL_SENT} action.
 */
export const mailSent = payload => ({
    payload,
    type: MAIL_SENT,
});

/**
 * Triggers request to update redux store on failure to send mail
 * 
 * @function
 * @param {Object} error An object of the error returned if mail is not 
 * sent and endpoint isn't reachable
 * @return {Object} The {@link actionTypes.MAIL_FAILED MAIL_FAILED} action.
 */
export const failedToSendmail = error => ({
    error,
    type: MAIL_FAILED,
});
