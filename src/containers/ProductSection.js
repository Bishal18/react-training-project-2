import { connect } from 'react-redux';
import * as actions from '../state/actions';
import ProductListingSection from '../components/common/ProductListingSection';

const mapStateToProps = ({ listing: { products } }) => ({
    products
});

const mapDispatchToProps = (dispatch, getState) => {
    return {
        fetchProducts: (type, params) => (
            dispatch(actions.fetchProducts(type, params))
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListingSection);