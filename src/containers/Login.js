import { connect } from 'react-redux';
import * as actions from '../state/actions';

import Login from '../pages/Login';

const mapStateToProps = (state) => {
    return {
        authenticated: state.auth.authenticated,
        user: state.auth.user
    }
}

const mapDispatchToProps = (dispatch, getState) => {
    return {
        login: (username, password, callbackFn) => {
            dispatch(actions.autheticateUser(username, password, callbackFn));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
