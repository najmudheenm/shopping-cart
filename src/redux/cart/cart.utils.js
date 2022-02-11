export const addItemToCart=(cartItems,cartItemToAdd)=>{
    
    const exstistingCartItem=cartItems.find(cartItem=>cartItem.id==cartItemToAdd.id);
    if (exstistingCartItem){
        return cartItems.map(cartItem=>(
            cartItem.id==cartItemToAdd.id ?{...cartItem,quantity:cartItem.quantity+1} :cartItem
        ))
    }
    return [...cartItems,{...cartItemToAdd,quantity:1}]
}

export const removeItemFromCart=(cartItems,removeItemFromCart)=>{

    console.log("hi");

    return cartItems.filter(cartItem=>cartItem.id!=removeItemFromCart.id)
}