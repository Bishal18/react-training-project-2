import config from '../configs/config';
import axios from 'axios';

export const getProductApiUrl = (type, filterParams = []) => {
    var apiUrl = `${config.baseApiUrl}${config.apiRoutes.productRoute}`;
    switch (type) {
        case config.listingType.topProductsListing:
            apiUrl += `?_sort=views&_order=desc&_limit=${config.topProductsCount}`;
            break;
        case config.listingType.filterProductsListing:
            var queryParams = filterParams.map((filter) => (
                `&${filter.name}=${filter.value}`
            ));
            apiUrl += `?${queryParams}`;
            break;
        case config.listingType.searchProductsListing:
            apiUrl += filterParams && `?q=${filterParams[0].query}`;
            break;
        default:
            break;
    }
    console.log(apiUrl);
    return apiUrl;
}

export const fetchCategories = async () => {
    let apiUrl = `${config.baseApiUrl}${config.apiRoutes.categoryRoute}`;
    try {
        let res = await axios.get(apiUrl);
        let { data } = await res;
        return data;
    }
    catch (error) {
        console.log('Error in fetchCategories utility', error);
    }

}