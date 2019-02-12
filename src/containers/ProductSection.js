//Ankit, Shubham

import { connect } from 'react-redux';
import * as actions from '../state/actions';
import ProductListingSection from '../components/common/ProductListingSection';

const mapStateToProps = ({ listing: { products }, cart: { cartItems } }) => ({
    products,
    cartItems
});

const mapDispatchToProps = (dispatch, getState) => {
    return {
        fetchProducts: (type, params) => (
            dispatch(actions.fetchProducts(type, params))
        ),
        updateCart: (product) => {
            dispatch(actions.updateCart(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListingSection);