import { connect } from 'react-redux';
import * as actions from '../state/actions';
import AddToCart from '../components/common/AddToCart';

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
});

const mapDispatchToProps = (dispatch, getState) => {
    return {
        addToCart: (product) => (
            dispatch(actions.updateCart("add", product))
        ),
        removeFromCart: (productId) => (
            dispatch(actions.removeFromCart(productId))
        ),
        updateCart: (product) => {
            dispatch(actions.updateCart("remove", product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToCart);