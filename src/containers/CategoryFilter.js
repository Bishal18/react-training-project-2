import { connect } from 'react-redux';
import * as actions from '../state/actions';
import CategoryFilter from '../components/CategoryFilter';

const mapStateToProps = ({ listing: { products } }) => ({
    products
});

const mapDispatchToProps = (dispatch, getState) => {
    return {
        fetchProducts: (type, filterParams) => (
            dispatch(actions.fetchProducts(type, filterParams))
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFilter);