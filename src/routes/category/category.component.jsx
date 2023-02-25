import { useParams } from 'react-router-dom';
import { Fragment,useContext,useState,useEffect } from 'react';
import { Categoriescontext } from '../../components/contexts/categories.context';
import ProductCard from '../../components/product-card/product-card.component';
import './category.styles.scss'
const Category=()=>{
    const {category}=useParams();
    const {categoriesMap}=useContext(Categoriescontext);
    const [products,setProducts]=useState(categoriesMap[category]);
    useEffect(()=>{
        setProducts(categoriesMap[category])

    },[category,categoriesMap])
    return (
    <Fragment>
        
            <h2 className='category-title'>{category.toUpperCase()}</h2>
            <div className='category-container'>
        
                {
                    products&&products.map((product)=>{
                        return (<ProductCard key={product.id} product={product}/>)})
                }
            </div>
    </Fragment>
    )
}

export default Category;