import CartItemTypes from './cart.types'

import {addItemToCart,removeItemFromCart} from './cart.utils'

const INITIAL_STATE={
    hidden:true,
    cartItems:[]
}

const cartReducer =(state=INITIAL_STATE, action) =>{
    switch(action.type){
        case CartItemTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden:!state.hidden,
            }
        case CartItemTypes.ADD_ITEM:
            return {
                ...state,
                cartItems:addItemToCart(state.cartItems,action.payload)
            }
        case CartItemTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems:removeItemFromCart(state.cartItems,action.payload)
            }
        default:
            return state
    }
}

export default cartReducer
