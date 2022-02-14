export const addItemToCart=(cartItems,cartItemToAdd)=>{
    
    const exstistingCartItem=cartItems.find(cartItem=>cartItem.id==cartItemToAdd.id);
    if (exstistingCartItem){
        return cartItems.map(cartItem=>(
            cartItem.id==cartItemToAdd.id ?{...cartItem,quantity:cartItem.quantity+1} :cartItem
        ))
    }
    return [...cartItems,{...cartItemToAdd,quantity:1}]
}

export const clearItemFromCart=(cartItems,removeItemFromCart)=>{

    console.log("hi");

    return cartItems.filter(cartItem=>cartItem.id!=removeItemFromCart.id)
}

export const removeItemFromCart=(cartItems,cartItemToRemove)=>{
    const exstistingCartItem=cartItems.find(cartItem=>cartItem.id==cartItemToRemove.id);
    if (exstistingCartItem.quantity==1){
        return cartItems.filter(cartItem=>cartItem.id!==exstistingCartItem.id)
    }
    else{
        return cartItems.map(cartItem=>(
            cartItem.id==exstistingCartItem.id ?{...cartItem ,quantity:cartItem.quantity-1} :cartItem
        )
            )
    }
}