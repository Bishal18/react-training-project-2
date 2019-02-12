//Shubham

import { connect } from 'react-redux';
import * as actions from '../state/actions';
import cartSummary from '../components/CartSummary';

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
});

const mapDispatchToProps = (dispatch, getState) => {
    return {
        removeFromCart: (productId) => (
            dispatch(actions.removeFromCart(productId))
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(cartSummary);