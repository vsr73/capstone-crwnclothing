import { createContext,useState,useEffect } from "react";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
export const Categoriescontext=createContext({
    categoriesMap:{}
})


export const Categoriesprovider=({children})=>{
    const [categoriesMap,setCategoriesMap]=useState({})
    const value={categoriesMap}
    useEffect(()=>{
        const getCategoriesMap = async()=>{
            
            const categoriesMap=await getCategoriesAndDocuments()
            setCategoriesMap(categoriesMap)
        }
        getCategoriesMap()

        
    },[])
return <Categoriescontext.Provider value={value}>{children}</Categoriescontext.Provider>
}

//fisrt mistake in use state i used {} instead of []
// and second one was assign product object to a value and then pass value to value such that the product can be de structured