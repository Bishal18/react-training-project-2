import {connect} from 'react-redux';

import * as actions from '../state/actions';
import { bindActionCreators } from 'redux';

import Header from '../components/Header';

const mapStateToProps = (state) => {
    console.log('mapStateToProps header', state);
    return {
        user: state.auth.user
    }
}

const mapDispatchToProps = (dispatch, getState) => {
    return {
        // logout :  function(){
        //     dispatch(actions.logout());
        // },
        actions : bindActionCreators(actions, dispatch)
        //logout : bindActionCreators(actions.logout(), dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Header);
