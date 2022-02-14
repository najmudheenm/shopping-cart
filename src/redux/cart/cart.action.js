import CartItemTypes from "./cart.types";


export const toggleCartHidden=()=> {
    return {type:CartItemTypes.TOGGLE_CART_HIDDEN}
}
export const addCartItem=(item)=>({
    type:CartItemTypes.ADD_ITEM,
    payload: item
})

export const clearCartItem=(item)=>({
    type:CartItemTypes.CLEAR_ITEM,
    payload: item
})

export const removeCartItem=(item)=>({
    type:CartItemTypes.REMOVE_ITEM,
    payload: item
})