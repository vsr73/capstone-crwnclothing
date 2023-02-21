import { Children, createContext,useState } from "react";
import PRODUCTS from '../../shop-data.json'

export const ProductsContext=createContext({
    products:[]
})

export const ProductsProvider=({children})=>{
    const [products,setProducts]=useState(PRODUCTS)
    const value={products}
    console.log('improving skills',products)
return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}

//fisrt mistake in use state i used {} instead of []
// and second one was assign product object to a value and then pass value to value such that the product can be de structured