// import {  Fragment,useContext } from "react"
// import { Categoriescontext } from "../../components/contexts/categories.context"
import CategoryPreview from "../../components/category-preview/category-preview.component"
import { selectCategories } from "../../store/categories/category.selector"
import { useSelector } from "react-redux"
import './categories-preview.styles.scss'
const CategoriesPreview=()=>{
   const categories=useSelector(selectCategories)

    // const {categoriesMap}=useContext(Categoriescontext)
    return (
        <div className="category-preview-container">
            {
             Object.keys(categories).map(title=>{
                    const products=categories[title]
                    return(
                     <CategoryPreview key={title} title={title} products={products} />
                    )
                })
            }
        </div>
        
        
    )
}

export default CategoriesPreview;