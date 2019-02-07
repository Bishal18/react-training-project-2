import * as ActionTypes from '../action-types';
import config from '../../configs/config';

const INITIAL_STATE = {
    products: []
}

export const listingReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.PRODUCTS:
            return { ...state, products: action.payload.products };
        default:
            return state;
    }
}
