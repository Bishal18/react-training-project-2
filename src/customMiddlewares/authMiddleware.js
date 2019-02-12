import base64 from 'base-64'
import * as ActionTypes from '../state/action-types';
import config from '../configs/config'
import * as actions from '../state/actions'
import * as utils from '../utilities/api';

function authenticateUser(store) {
    const authToken = window.localStorage.getItem(config.localStorageKeys.authToken);
    if (authToken) {
        const data = base64.decode(authToken).split(':');
        utils.authenticateUser(data[0], data[1])
            .then(users => {
                if (users && users.length > 0) {
                    store.dispatch(actions.login(users[0]));
                }
            });
    }
}

function authMiddleware(store) {
    return function (nextFunc) {
        return function (action) {
            const state = store.getState();
            const result = nextFunc(action);

            if (action.type && action.type === ActionTypes.VALIDATE_TOKEN) {
                if (state.auth.user === null) {
                    authenticateUser(store);
                }
            }

            if (action.type && action.type === ActionTypes.LOGIN) {
                const user = action.payload.user;
                const hash = base64.encode(`${user.username}:${user.password}`);
                window.localStorage.setItem(config.localStorageKeys.authToken, hash);
            }

            if (action.type && action.type === ActionTypes.LOGOUT) {
                window.localStorage.removeItem(config.localStorageKeys.authToken);
                window.sessionStorage.removeItem(config.localStorageKeys.cartItems);
            }

            return result;
        }
    }
}

export default authMiddleware;