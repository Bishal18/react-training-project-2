import React, { Component } from 'react';

class SearchProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchSelection: ''
        }
    }

    onSearch = (e) => {
        this.setState({
            searchSelection: (e.target.value) || ''
        })
    }


    render() {
        let { type } = this.props;
        return (
            <div className="row search">
                <div className="col-md-6">
                    <input
                        value={this.state.searchSelection}
                        type="text"
                        onChange={this.onSearch}
                    />
                </div>
                <div className="col-md-4">
                    <button onClick={() => this.props.fetchProducts(type, [{ "query": this.state.searchSelection }])}>
                        Search
                    </button>
                </div>

            </div>
        );
    }
}

export default SearchProduct;