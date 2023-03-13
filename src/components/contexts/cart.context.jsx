import { createContext,useReducer,  } from "react";
import { createAction } from "../../utils/reducers/reducers.utils";
export const CartContext=createContext(
    {
        isCartOpen:false,
        setIsCartOpen:()=>{},
        cartItems:[],
        addCartItem:()=>{ },
        cartCount:0,
        setCartCount:()=>{},
        removeItemFromCart:()=>{},
        clearItemFromCart:()=>{},
        cartTotal:0,
        cartTotal:()=>{}

    }
)




const removeItemFromCartCompletely=(cartItems,cartItemToRemove)=>{
        
        return cartItems.filter(cartItem=>cartItem.id!=cartItemToRemove.id)

}

const removeCartItem=(cartItems,cartItemToRemove)=>{
    const existingCartItem=cartItems.find((cartItem)=>cartItem.id==cartItemToRemove.id)
    
    if (existingCartItem.quantity===1){
        return cartItems.filter(cartItem=>cartItem.id!=cartItemToRemove.id)
    }

    if (existingCartItem){
        return cartItems.map((cartItem)=> cartItem.id==cartItemToRemove.id
        ? {...cartItem,quantity:cartItem.quantity-1}
    
        :cartItem
        )
    }
}



const addItemToCart=(cartItems,productToAdd)=>{
    const existingCartItem=cartItems.find((cartItem)=>cartItem.id===productToAdd.id)
    
    if (existingCartItem){
        return cartItems.map((cartItem)=> cartItem.id==productToAdd.id
        ? {...cartItem,quantity:cartItem.quantity+1}
    
        :cartItem
        )
    }
    // if (addProductsToAdd in cartItems){
    //     carItems.addItemToCart[id]+=1
    // } 
    // else{
    //     cartItems+=[productToAdd]
    // }

    return [...cartItems,{...productToAdd,quantity:1}]
}

const countCartTotal=(cartItems)=>{
    const newCartTotal=cartItems.reduce((total,cartItem)=>total+cartItem.quantity*cartItem.price,0)
    return newCartTotal
}

const INITIAL_STATE={
    isCartOpen:false,
    cartItems:[],
    cartCount:0,
    cartTotal:0,


}


export const CART_ACITON_TYPES={
    SET_IS_CARTOPEN:'set_Is_CartOpen',
    SET_CART_ITEMS:'set_Cart_Items',
    
}
const cartReducer=(state,action)=>{
    const {type,payload}=action
    switch (type){
        case CART_ACITON_TYPES.SET_IS_CARTOPEN:
            return {
                ...state,
                isCartOpen:payload
            }
 
        case CART_ACITON_TYPES.SET_CART_ITEMS:
            const {newCartItems,newCartCount,newCartTotal}=payload
            return {
                ...state,
                // ...payload
                cartItems:newCartItems,
                cartCount:newCartCount,
                cartTotal:newCartTotal,
            }

        default:
            throw new Error(`un handled type ${type} in CartReducer`)
        
    }
}

export const CartProvider=({children})=>{
    
    
    const [state,dispatch]=useReducer(cartReducer,INITIAL_STATE)
    const {isCartOpen,cartItems,cartCount,cartTotal}=state

    const setIsCartOpen=(booleanValue)=>{
        dispatch(createAction(CART_ACITON_TYPES.SET_IS_CARTOPEN,booleanValue))
    }
    
    const addCartItems=(productToAdd)=>{
        const newCartItems=addItemToCart(cartItems,productToAdd)
        updateCartItems(newCartItems)
    }

    const removeItemFromCart=(cartItemToRemove)=>{
        const newCartItems=removeCartItem(cartItems,cartItemToRemove)
        updateCartItems(newCartItems)
    }

    const clearItemFromCart=(cartItemToRemove)=>{
        const newCartItems=removeItemFromCartCompletely(cartItems,cartItemToRemove)
        updateCartItems(newCartItems)
    }


   const updateCartItems=(newCartItems)=>{
    const newCartCount=newCartItems.reduce((total,cartItem)=>total+cartItem.quantity,0)
    const newCartTotal=countCartTotal(newCartItems)
    dispatch(
        createAction(CART_ACITON_TYPES.SET_CART_ITEMS,{
            newCartItems,
            newCartCount,
            newCartTotal}
            )
    )
   }

    const value={isCartOpen,
        setIsCartOpen,
        cartItems,
        addCartItems,
        cartCount,
        removeItemFromCart,
        clearItemFromCart,
        cartTotal
    }

    return <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
}

