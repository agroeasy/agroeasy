import { REQUEST_SEARCH, UPDATE_SEARCH } from './actionTypes';
const initialState = {
    isloading: false,
    results: [],
};

export default ( state = { ...initialState },  action) => {

    switch(action.type){
    case REQUEST_SEARCH: {
        const { payload } = action;
        return {
            ...state,
            isloading: true,
            payload,
        };
    }
    case UPDATE_SEARCH:{
        const { payload } = action;
        return{
            ...state,
            isloading: false,
            results: payload,
        };
    }
    default:
        return state;
    }

};
