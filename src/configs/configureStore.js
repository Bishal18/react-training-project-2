import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { authReducer } from '../state/reducers/authReducer';
import { cartReducer } from '../state/reducers/cartReducer';
import { listingReducer } from '../state/reducers/listingReducer';
import authMiddleware from '../customMiddlewares/authMiddleware';
import cartSessionMiddleware from '../customMiddlewares/cartSessionMiddleware';
import config from '../configs/config';

const configureStore = () => {
    const rootReducer = combineReducers({
        auth: authReducer,
        cart: cartReducer,
        listing: listingReducer
    });

    const cartItems = JSON.parse(window.sessionStorage.getItem(config.localStorageKeys.cartItems)) || [];
    const initialState = { cart: { cartItems } };

    return createStore(rootReducer, initialState, applyMiddleware(authMiddleware, cartSessionMiddleware, ReduxThunk));
}

export default configureStore;