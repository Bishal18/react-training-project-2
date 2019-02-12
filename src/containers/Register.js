import { connect } from 'react-redux';
import * as actions from '../state/actions';

import Register from '../pages/Register';

const mapStateToProps = (state) => {
    return {
        authenticated: state.auth.authenticated,
    }
}

const mapDispatchToProps = (dispatch, getState) => {
    return {
        register: (user, history) => {
            dispatch(actions.register(user, history));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
