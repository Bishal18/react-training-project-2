import config from '../configs/config';

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
        default:
            break;
    }
    console.log(apiUrl);
    return apiUrl;
}