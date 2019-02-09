import { connect } from 'react-redux';
import * as actions from '../state/actions';
import OrderSummary from '../pages/OrderSummary';

const mapStateToProps = ({ auth: { user } }) => ({
    user
});

export default connect(mapStateToProps)(OrderSummary);