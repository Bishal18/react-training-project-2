//Ankit

import React from 'react';
import config from '../configs/config';
import { DebounceInput } from 'react-debounce-input';

const SearchProduct = (props) => {
    return (
        <div className="row">
            <div className="col-md-3">
                <p>Search :</p>
            </div>
            <div className="col-md-9">
                <DebounceInput
                    minLength={2}
                    debounceTimeout={500}
                    onChange={(e) => props.onFilter(e, config.filterType.searchFilter)} />
            </div>
        </div>
    );
}

export default SearchProduct;