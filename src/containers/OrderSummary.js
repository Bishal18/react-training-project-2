import { connect } from 'react-redux';
import OrderSummary from '../pages/OrderSummary';

const mapStateToProps = ({ auth: { user } }) => ({
    user
});

export default connect(mapStateToProps)(OrderSummary);