import * as actions from "./actions";
import * as ActionTypes from './action-types';
import axios from 'axios';
var mockResult = {};

describe("testing get products", () => {
    it("should get all products", async () => {
        await axios.get('https://reactprojectdbserver.azurewebsites.net/products')
            .then(response => {
                mockResult = response.data;
            })
        const expectedActions = [
            { type: ActionTypes.PRODUCTS, payload: {products: mockResult} }
        ]
        let actionFn = actions.fetchProducts();
        let dispatch = jest.fn();
        let products = await actionFn(dispatch);
        expect(dispatch).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch.mock.calls[0]).toEqual(expectedActions);
    })

    it("should get top 4 products", async () => {
        await axios.get('https://reactprojectdbserver.azurewebsites.net/products?_sort=views&_order=desc&_limit=4')
            .then(response => {
                mockResult = response.data;
            })
        const expectedActions = [
            { type: ActionTypes.PRODUCTS, payload: {products: mockResult} }
        ]
        let actionFn = actions.fetchProducts("topProductsListing");
        let dispatch = jest.fn();
        let products = await actionFn(dispatch);
        expect(dispatch).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch.mock.calls[0]).toEqual(expectedActions);
    })
})

