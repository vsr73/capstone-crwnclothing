import { useParams } from 'react-router-dom';
import { Fragment,useState,useEffect } from 'react';
// import { Categoriescontext } from '../../components/contexts/categories.context';
import { useSelector } from 'react-redux';
import { selectCategoriesMap,selectCategoriesIsLoading } from '../../store/categories/category.selector';
import ProductCard from '../../components/product-card/product-card.component';
import { Spinner } from '../../components/spinner/spinner.component';
import './category.styles.scss'
const Category=()=>{
    
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);
    const [products, setProducts] = useState(categoriesMap[category.toLowerCase()]);
    useEffect(() => {
      setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);
    return (
    <Fragment>
        <h2 className='category-title'>{category.toUpperCase()}</h2>
        {
            isLoading ? (<div><Spinner/></div>):
            (
                
            <div className='category-container' >
                {
                  products&&products.map((product)=>{
                    return (<ProductCard key={product.id} product={product}/>)
                })

                }
            </div>
            )
}
    </Fragment>
    )
}

export default Category;