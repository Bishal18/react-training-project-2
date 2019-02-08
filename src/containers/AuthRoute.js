import { connect } from 'react-redux';

import * as actions from '../state/actions';
import { bindActionCreators } from 'redux';

import AuthRoute from '../components/common/AuthRoute';

const mapStateToProps = (state) => {
    return {
        authenticated: state.auth.authenticated
    }
}

// const mapDispatchToProps = (dispatch, getState) => {
//     return {
//         authenticateUser: () => {
//             dispatch(actions.validateToken());
//         }
//     }
// }

export default connect(mapStateToProps)(AuthRoute);
