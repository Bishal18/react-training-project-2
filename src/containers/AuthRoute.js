//Manoj

import { connect } from 'react-redux';
import AuthRoute from '../components/common/AuthRoute';

const mapStateToProps = (state) => {
    return {
        authenticated: state.auth.authenticated
    }
}

export default connect(mapStateToProps)(AuthRoute);
