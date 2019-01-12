import { MAIL_SENT, MAIL_FAILED, REQUEST_SENDMAIL } from './actionTypes';

export const sendContactMail = payload => ({
    payload,
    type: REQUEST_SENDMAIL,
});

export const mailSent = data => ({
    data,
    type: MAIL_SENT,
});

export const failedToSendmail = error => ({
    error,
    type: MAIL_FAILED,
});
