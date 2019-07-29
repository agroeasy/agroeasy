import { UPDATE_SEARCH } from './actionTypes';
const initialState = {
    isloading: false,
    results: [],
};

export default (state = { ...initialState }, action) => {
    switch (action.type) {
        case UPDATE_SEARCH: {
            const { payload } = action;
            return {
                ...state,
                isloading: false,
                results: [payload],
            };
        }
        default:
            return state;
    }
};
