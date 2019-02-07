import { connect } from 'react-redux';
import * as actions from '../state/actions';
import ProductListingSection from '../components/common/ProductListingSection';

const mapStateToProps = ({ listing: { products } }) => {
    console.log("ProductSection" , products)
    return({
        products
    })
    
};

const mapDispatchToProps = (dispatch, getState) => {
    return {
        fetchProducts: (type) => (
            dispatch(actions.fetchProducts(type))
        ),
        buyNow: (product) => {
            console.log("buynow click", product)
            dispatch(actions.buyNow(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListingSection);