import * as ActionTypes from '../action-types';
import config from '../../configs/config';

const INITIAL_STATE = {
    user: null
}

export const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.LOGOUT:
            return { ...state, user: null }
        case ActionTypes.LOGIN:
            return {...state, user: action.payload.user}
        default:
            return state;
    }
}
