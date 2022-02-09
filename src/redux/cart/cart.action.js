import CartItemTypes from "./cart.types";


export const toggleCartHidden=()=> {
    return {type:CartItemTypes.TOGGLE_CART_HIDDEN}
}
export const addItem=(item)=>({
    type:CartItemTypes.ADD_ITEM,
    payload: item
})