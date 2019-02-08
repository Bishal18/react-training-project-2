import {connect} from 'react-redux';
import * as actions from '../state/actions';
import { bindActionCreators } from 'redux';

import Header from '../components/Header';

const mapStateToProps = (state) => {
    return {
        user: state.auth.user
    }
}

const mapDispatchToProps = (dispatch, getState) => {
    return {
        actions : bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Header);
