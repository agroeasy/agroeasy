import {
    ADD_ITEM_TO_CART,
    DELETE_ITEMS_IN_CART,
    DELETE_ITEM_IN_CART,
    UPDATE_ITEM_IN_CART,
    GET_USER_CART_ITEMS,
    SET_CART,
    ERROR_MESSAGE,
    SUCCESS_MESSAGE,
} from './actionTypes';

const initialState = {
    cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
    errorMessage: null,
    isSending: false,
    successMessage: null,
};

export default (state = { ...initialState }, action) => {
    switch (action.type) {
        case ADD_ITEM_TO_CART:
            return {
                ...state,
                isSending: true,
            };
        case DELETE_ITEMS_IN_CART:
            return {
                ...state,
                isSending: true,
            };
        case DELETE_ITEM_IN_CART:
            return {
                ...state,
                isSending: true,
            };
        case UPDATE_ITEM_IN_CART:
            return {
                ...state,
                isSending: true,
            };
        case GET_USER_CART_ITEMS:
            return {
                ...state,
                isSending: true,
            };
        case SUCCESS_MESSAGE:
            return {
                ...state,
                isSending: false,
                successMessage: action.payload,
            };
        case SET_CART:
            localStorage.setItem('cart', action.payload);
            return {
                ...state,
                cart: action.payload,
            };
        case ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: action.payload,
                isSending: false,
            };
        default:
            return state;
    }
};
