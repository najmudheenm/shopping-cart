import CartItemTypes from './cart.types'

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
                cartItems:[...state.cartItems,action.payload]
            }
        default:
            return state
    }
}

export default cartReducer
