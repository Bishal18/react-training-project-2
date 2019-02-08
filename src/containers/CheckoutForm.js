import { connect } from 'react-redux';
import * as actions from '../state/actions';
import ShippingForm from '../components/ShippingForm';

const mapStateToProps = ({ cart: { cartItems }, auth: { user: {id} } }) => ({
    cartItems,
    userId: id
});

const mapDispatchToProps = (dispatch, getState) => {
    return {
        placeOrder: (formData) => (
            dispatch(actions.placeOrder(formData))
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShippingForm);