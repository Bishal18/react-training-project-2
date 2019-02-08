import { connect } from 'react-redux';
import * as actions from '../state/actions';
import AddToCart from '../components/common/AddToCart';

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
});

const mapDispatchToProps = (dispatch, getState) => {
    return {
        updateCart: (product) => {
            dispatch(actions.updateCart(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToCart);