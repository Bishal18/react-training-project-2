import React from 'react';
import ProductListingSection from "./ProductListingSection";
import { mount, shallow } from "enzyme";
import { Provider } from "react-redux";
import configureStore from '../../configs/configureStore';
import ProductCard from './ProductCard';

const store = configureStore();

describe("ProductListingSection component Suite", () => {
    let props

    beforeEach(() => {
        props = {
            fetchProducts: jest.fn(),
            products: [{ "id": 1, "categoryId": 1, "name": "OnePlus 6t", "shortDescription": "Sample Short Description", "longDescription": "Sample Long Description", "price": 38000, "imageUrl": "https://via.placeholder.com/250x250.png?text=OnePlus 6t", "ratings": { "avgRating": 4.5, "totalReviews": 20 }, "views": 10023 }]
        }
    })
    it("about default test", () => {
        let wrapper = mount(<Provider store={store}>
            <ProductListingSection fetchProducts={props.fetchProducts}
            />
        </Provider>
        );
        expect(wrapper.find("h3").length).toBe(1);
    })

    it("about  test", () => {
        let wrapper = shallow(
            <ProductListingSection products={props.products} fetchProducts={props.fetchProducts}/>
        );
        expect(wrapper.find(ProductCard).length).toBe(1);

    })  

})