import React, { Component } from 'react';
import config from '../configs/config';
import { DebounceInput } from 'react-debounce-input';

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
        this.props.fetchProducts(config.listingType.searchProductsListing, [{ "query": this.state.searchSelection }])
    }


    render() {
        return (
            <div className="row">
               <div className="col-md-3">
                    <p>Search :</p>
                </div> 
                <div className="col-md-9"> 
                <DebounceInput
                    minLength={2}
                    debounceTimeout={500}
                    onChange={this.onSearch}/>
                </div>
            </div>


            // <div className="row search">
            //     <div className="col-md-6">
            //         <input
            //             value={this.state.searchSelection}
            //             type="text"
            //             onChange={this.onSearch}
            //         />
            //     </div>
            //     <div className="col-md-4">
            //         <button onClick={() => this.props.fetchProducts(config.listingType.searchProductsListing, [{ "query": this.state.searchSelection }])}>
            //             Search
            //         </button>
            //     </div>

            // </div>
        );
    }
}

export default SearchProduct;