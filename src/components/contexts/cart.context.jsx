import { createContext, useState,useEffect } from "react";

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
    const existingCartItem=cartItems.find((cartItem)=>cartItem.id==productToAdd.id)
    
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

export const CartProvider=({children})=>{
    const [isCartOpen,setIsCartOpen]=useState(false)
    const [cartItems,setCartItems]=useState([])
    const [cartCount,setCartCount]=useState(0)
    const [cartTotal,setCartTotal]=useState(0)
    const addCartItems=(productToAdd)=>{
        setCartItems(addItemToCart(cartItems,productToAdd))
    }

    const removeItemFromCart=(cartItemToRemove)=>{
        setCartItems(removeCartItem(cartItems,cartItemToRemove))
    }

    const clearItemFromCart=(cartItemToRemove)=>{
        setCartItems(removeItemFromCartCompletely(cartItems,cartItemToRemove))
    }
    useEffect(()=>{
        const newCartCount=cartItems.reduce((total,cartItem)=>total+cartItem.quantity,0)
        setCartCount(newCartCount)
        setCartTotal(countCartTotal(cartItems))

    }
    ,[cartItems]
    )

    const value={isCartOpen,setIsCartOpen,cartItems,addCartItems,cartCount,removeItemFromCart,clearItemFromCart,cartTotal}
    return <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
}

