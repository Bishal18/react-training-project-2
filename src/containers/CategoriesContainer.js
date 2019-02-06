import { connect } from 'react-redux';
import * as actions from '../state/actions';
import CategoryListingSection from '../components/common/CategoryListingSection';

const mapStateToProps = ({ listing: { categories } }) => ({
    categories
});

const mapDispatchToProps = (dispatch, getState) => {
    return {
        fetchCategories: (type) => (
            dispatch(actions.fetchCategories(type))
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryListingSection);