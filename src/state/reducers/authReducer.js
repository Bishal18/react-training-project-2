import * as ActionTypes from '../action-types';
import config from '../../configs/config';

const INITIAL_STATE = {
    authenticated: false,
    username: ''
}

export const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.LOGOUT:
            return { ...state, authenticated: false, username: '' }
        case ActionTypes.LOGIN:
            return {...state, authenticated: true, username: action.payload.username}
        default:
            return state;
    }
}
