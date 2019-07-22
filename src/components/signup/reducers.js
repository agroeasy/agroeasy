import { RESET_STATE, SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from './actionTypes';

const initialState = {
    isLoading: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_REQUEST:
            return {
                ...state,
                isLoading: true,
            };

        case SIGNUP_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isSuccessful: true,
            };
        }
        case SIGNUP_FAILURE: {
            const {
                status,
                data: { title },
            } = action.payload;

            return {
                ...state,
                isLoading: false,
                isSuccessful: false,
                message: title,
                status,
            };
        }

        case RESET_STATE:
            return { ...initialState };

        default:
            return state;
    }
};
