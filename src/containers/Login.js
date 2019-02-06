import { connect } from 'react-redux';

import * as actions from '../state/actions';
import { bindActionCreators } from 'redux';

import Login from '../pages/Login';

const mapStateToProps = (state) => {
    console.log("mapStateToProps", state);
    return {
        authenticated: state.auth.authenticated,
    }
}

const mapDispatchToProps = (dispatch, getState) => {
    return {
        login: function (username, password, callback) {
            let success = false;
            if (username === "admin" & password === "b") {
                const action = actions.login(true, username);
                console.log("action", action);
                dispatch(action);
                success = true;
            }
            callback(success);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
