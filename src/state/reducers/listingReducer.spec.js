import { listingReducer } from "./listingReducer";
import * as actions from "../actions";

describe("listing Reducer test suite", () => {

    it("should add product to end of the array", () => {

        let prevState = { products: [] };
        let action = actions.getProducts([{ id: 1 }]);

        expect(listingReducer(prevState, action))
            .toEqual({
                products: [{ id: 1 }]
            });
    })

})