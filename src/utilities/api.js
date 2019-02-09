import config from '../configs/config';
import axios from 'axios';

export const getProductApiUrl = (type, filterParams = []) => {
    var apiUrl = `${config.baseApiUrl}${config.apiRoutes.productRoute}`;
    switch (type) {
        case config.listingType.topProductsListing:
            apiUrl += `?_sort=views&_order=desc&_limit=${config.topProductsCount}`;
            break;
        case config.listingType.filterProductsListing:
            var queryParams = '';
            filterParams.map((filter) => (
                queryParams += queryParams === ''
                    ? `?${filter.name}=${filter.value}`
                    : `&${filter.name}=${filter.value}`
            ));
            apiUrl += `${queryParams}`;
            break;
        default:
            break;
    }
    return apiUrl;
}

export const fetchCategories = async () => {
    let apiUrl = `${config.baseApiUrl}${config.apiRoutes.categoryRoute}`;
    return axios.get(apiUrl)
        .then(response => {
            return response.data;
        })
        .catch(function (error) {
            console.log("Error in fetchCategories api: " + error);
        });
}

export const fetchProducts = async (type, filterParams) => {
    var apiUrl = getProductApiUrl(type, filterParams)
    return axios.get(apiUrl)
        .then(response => {
            return response.data;
        })
        .catch(function (error) {
            console.log("Error in fetchProducts api: " + error);
        });
}

export const authenticateUser = async (username, password) => {
    var apiUrl = `${config.baseApiUrl}${config.apiRoutes.usersRoute}?username=${username}&password=${password}`
    return axios.get(apiUrl)
        .then(response => {
            return response.data;
        })
        .catch(function (error) {
            console.log("Error in authenticateUser api: " + error);
        });
}

export const placeOrder = async (data) => {
    var apiUrl = `${config.baseApiUrl}${config.apiRoutes.orderRoute}`
    return axios.post(apiUrl, data)
        .then(response => {
            return response;
        })
        .catch(function (error) {
            console.log("Error in placeOrder action: " + error);
        });
}

export const getOrderDetail = async (orderId) => {
    var apiUrl = `${config.baseApiUrl}${config.apiRoutes.orderRoute}/${orderId}`;
    return axios.get(apiUrl)
        .then(response => {
            return response.data;
        })
        .catch(function (error) {
            console.log("Error in getOrderDetail api: " + error);
        });
}
