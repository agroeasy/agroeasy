import { MAIL_SENT, MAIL_FAILED, REQUEST_SENDMAIL } from './actionTypes';

const initialState = {
    isSending: false,
    message: '',
    senderMail: ''
};

export default (state = { ...initialState }, action) => {
    switch (action.type) {
        case REQUEST_SENDMAIL:
            return {
                ...state,
                isSending: true
            };
        case MAIL_SENT: {
            const { email, message, name, success: isMailSent } = action.payload;
            return {
                ...state,
                isMailSent,
                isSending: false,
                message,
                name,
                senderMail: email
            };
        }
        case MAIL_FAILED:
            return {
                ...state,
                error: action.error,
                isSending: false
            };
        default:
            return state;
    }
};
