import * as ActionTypes from '../action-types';
import config from '../../configs/config';

const INITIAL_STATE = {
    products: [],
    categories: []
}

export const listingReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.Products:
            return { ...state, products: action.payload.products };
        case ActionTypes.Categories:
            return { ...state, categories: action.payload.categories };
        default:
            return state;
    }
}
