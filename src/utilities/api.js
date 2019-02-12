import config from '../configs/config';
import graphqlClient from './graphql';
import axios from 'axios';
import gql from "graphql-tag";

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
    if (config.useGraphqlServer) {
        return getCategoriesGraphql();
    }
    else {
        let apiUrl = `${config.baseApiUrl}${config.apiRoutes.categoryRoute}`;
        return axios.get(apiUrl)
            .then(response => {
                return response.data;
            })
            .catch(function (error) {
                console.log("Error in fetchCategories api: " + error);
            });
    }
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
    if (config.useGraphqlServer) {
        return graphqlClient.query({
            query: gql`
                        query GetUser($username: String!, $password: String!){
                            allUsers(filter: {username: $username, password: $password})
                            {
                                id,
                                username,
                                password
                            }
                        }
                        `,
            variables: {
                username: username,
                password: password
            }
        }).then(result => {
            const {
                data
            } = result;
            return data.allUsers;
        }).catch(function (error) {
            console.log("Error in authenticateUser api: " + error);
        });
    }
    else {
        var apiUrl = `${config.baseApiUrl}${config.apiRoutes.usersRoute}?username=${username}&password=${password}`
        return axios.get(apiUrl)
            .then(response => {
                return response.data;
            })
            .catch(function (error) {
                console.log("Error in authenticateUser api: " + error);
            });
    }
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

//--------------------------------------------------------------------------------------------------
//GraphQl API's

const getCategoriesGraphql = async () => {
    return graphqlClient.query({
        query: gql`
                    query{
                        allCategories{
                            id,
                            name,
                            imageUrl
                        }
                    }
                    `
    }).then(result => {
        const {
            data
        } = result;
        return data.allCategories;
    }).catch(function (error) {
        console.log("Error in fetchCategories api: " + error);
    });
}