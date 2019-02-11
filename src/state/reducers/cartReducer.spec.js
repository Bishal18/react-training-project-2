import { cartReducer } from "./cartReducer";
import * as actions from "../actions";

describe("cart Reducer test suite", () => {

    it("should add item to end of the array", () => {

        let prevState = { cartItems: [{ id: 1, name: 'dummy1', price: 1000, qty: 1, totalPrice: 1000 }] };
        let action = actions.updateCart({ id: 2, name: 'dummy2', price: 1000, qty: 1, totalPrice: 1000 });

        expect(cartReducer(prevState, action))
            .toEqual({
                cartItems: [
                    { id: 1, name: 'dummy1', price: 1000, qty: 1, totalPrice: 1000 },
                    { id: 2, name: 'dummy2', price: 1000, qty: 1, totalPrice: 1000 }
                ]
            });
    })

    it("should remove item from array", () => {

        let prevState = { cartItems: [{ id: 1, name: 'dummy1', price: 1000, qty: 1, totalPrice: 1000 }] };
        let action = actions.removeFromCart(1);

        expect(cartReducer(prevState, action))
            .toEqual({
                cartItems: []
            });
    })

    it("should increase item qty in array", () => {

        let prevState = { cartItems: [{ id: 1, name: 'dummy1', price: 1000, qty: 1, totalPrice: 1000 }] };
        let action = actions.updateCart({ id: 1, name: 'dummy1', price: 1000, qty: 2, totalPrice: 2000 });

        expect(cartReducer(prevState, action))
            .toEqual({
                cartItems: [{ id: 1, name: 'dummy1', price: 1000, qty: 2, totalPrice: 2000 }]
            });
    })

    it("should decrease item qty in array", () => {

        let prevState = { cartItems: [{ id: 1, name: 'dummy1', price: 1000, qty: 2, totalPrice: 2000 }] };
        let action = actions.updateCart({ id: 1, name: 'dummy1', price: 1000, qty: 1, totalPrice: 1000 });

        expect(cartReducer(prevState, action))
            .toEqual({
                cartItems: [{ id: 1, name: 'dummy1', price: 1000, qty: 1, totalPrice: 1000 }]
            });
    })

})