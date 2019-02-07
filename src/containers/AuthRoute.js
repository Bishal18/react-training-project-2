import { connect } from 'react-redux';

import * as actions from '../state/actions';
import { bindActionCreators } from 'redux';

import AuthRoute from '../components/common/AuthRoute';

const mapStateToProps = (state) => {
    console.log("mapStateToProps AuthRoute", state);
    return {
        authenthicated: state.auth.user !== null ? false: true,
    }
}

const mapDispatchToProps = (dispatch, getState) => {
    return {
        authenticateUser: () => {
            dispatch(actions.validateToken());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthRoute);
