import {connect} from 'react-redux';

import * as actions from '../state/actions';
import { bindActionCreators } from 'redux';

import Login from '../components/Login';

const mapStateToProps = (state) => {
    console.log("mapStateToProps", state);
    return {
        authenticated: state.auth.authenticated,
        username: state.auth.username
    }
}

const mapDispatchToProps = (dispatch, getState) => {
    return {
        actions : bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Login);
