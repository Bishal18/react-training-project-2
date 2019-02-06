import {connect} from 'react-redux';

import * as actions from '../state/actions';
import { bindActionCreators } from 'redux';

import Header from '../components/Header';

const mapStateToProps = (state) => {
    return {
        authenticated: state.auth.authenticated,
        username: state.auth.username
    }
}

const mapDispatchToProps = (dispatch, getState) => {
    console.log("")
    return {
        // logout :  function(){
        //     dispatch(actions.logout());
        // },
        actions : bindActionCreators(actions, dispatch)
        //logout : bindActionCreators(actions.logout(), dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Header);
