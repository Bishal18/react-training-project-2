import { connect } from 'react-redux';

import * as actions from '../state/actions';
import { bindActionCreators } from 'redux';

import Login from '../pages/Login';

const mapStateToProps = (state) => {
    console.log("mapStateToProps login", state);
    return {
        user: state.auth.user,
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
