import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { authReducer } from '../state/reducers/authReducer';
import { cartReducer } from '../state/reducers/cartReducer';
import { listingReducer } from '../state/reducers/listingReducer';


const configureStore = () => {
    const rootReducer = combineReducers({
        auth: authReducer,
        cart: cartReducer,
        listing: listingReducer
    });

    return createStore(rootReducer, applyMiddleware(ReduxThunk));
}

export default configureStore;