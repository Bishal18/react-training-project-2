import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { authReducer } from '../state/reducers/authReducer';
import { cartReducer } from '../state/reducers/cartReducer';
import { listingReducer } from '../state/reducers/listingReducer';
import authMiddleware from '../customMiddlewares/authMiddleware';

const configureStore = () => {
    const rootReducer = combineReducers({
        auth: authReducer,
        cart: cartReducer,
        listing: listingReducer
    });
    return createStore(rootReducer, applyMiddleware(authMiddleware,ReduxThunk));
}

export default configureStore;