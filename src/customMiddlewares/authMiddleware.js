import base64 from 'base-64'
import * as ActionTypes from '../state/action-types';
import config from '../configs/config'
import * as actions from '../state/actions'

function authenticateUser(store) {
    const authToken = window.localStorage.getItem('authToken');
    console.log('auth token', authToken);
    if (authToken) {
        const data = base64.decode(authToken).split(':');
        const api = `${config.baseApiUrl}${config.apiRoutes.usersRoute}?username=${data[0]}&password=${data[1]}`
        fetch(api)
            .then(response => response.json())
            .then(users => {
                if (users && users.length > 0) {
                    store.dispatch(actions.login(users[0]));
                }
            });
    }
}

function authMiddleware(store) {
    console.log("authMiddleware");
    return function (nextFunc) {
        return function (action) {
            const state = store.getState();
            console.log('AUTH MIDDLEWARE', state, action);

            const result = nextFunc(action);

            if (action.type && action.type === ActionTypes.VALIDATE_TOKEN) {
                if (state.auth.user === null) {
                    authenticateUser(store);
                }
            }

            if (action.type && action.type === ActionTypes.LOGIN) {
                const user = action.payload.user;
                const hash = base64.encode(`${user.username}:${user.password}`);
                window.localStorage.setItem("authToken", hash);
            }

            if (action.type && action.type === ActionTypes.LOGOUT) {
                window.localStorage.removeItem("authToken");
            }

            return result;
        }
    }
}

export default authMiddleware;