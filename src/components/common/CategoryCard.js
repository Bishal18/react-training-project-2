import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class CategoryCard extends Component {

    onClickMore = (categoryId) => {
        this.props.history.push(`/products/bycategory/${categoryId}`);
    }

    render() {
        let { cardDetail: { id, name, imageUrl } } = this.props;
        return (
            <div className="col-md-3">
                <div className="card">
                    <img src={imageUrl} className="card-img-top" alt={name} />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <div className="cardDetails offset-md-9">
                            <button onClick={() => this.onClickMore(id)} className="btn btn-primary">More</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

CategoryCard.propTypes = {
    cardDetail : PropTypes.shape({
        id: PropTypes.any,
        name: PropTypes.string,
        imageUrl: PropTypes.string
      }),
}

export default withRouter(CategoryCard);