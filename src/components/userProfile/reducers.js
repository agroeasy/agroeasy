//import _cloneDeep from 'lodash.clonedeep';
import { 
    FETCH_USER_DATA,
    // UPDATE_USER_DATA 
} from './actionTypes';

const initialState = {
    error: null,
    userInfo: {},
};

export default (state = { ...initialState }, action ) => {
    switch(action.type){

    case FETCH_USER_DATA: 
        //const fetchedUserInfo = _cloneDeep(state.userInfo).concat([ action.data ]);
        return {
            ...state,
            userInfo: action.data,
        };

    /*     case UPDATE_USER_DATA:
        return {
            ...state,
            updatedUserData: action.data,
        };
 */
    default:
        return state;
    }
};
