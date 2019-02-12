
export const updateCartItems = (cartItems, product) => {
    var index = cartItems.findIndex(item => item.id === product.id);
    console.log("index", index)
    if (index !== -1) {
        return product.qty > 0
            ? [...cartItems.slice(0, index), product, ...cartItems.slice(index + 1)]
            : [...cartItems.slice(0, index), ...cartItems.slice(index + 1)]
    }
    else {
        return [...cartItems, product];
    }
}

export const removeItemFromCart = (cartItems, productId) => {
    return cartItems.filter(
        cartItem => cartItem.id !== productId
    )
}