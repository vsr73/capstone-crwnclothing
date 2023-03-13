import './category-preview.styles.scss'
import ProductCard from '../product-card/product-card.component';
import { Link } from 'react-router-dom';
const CategoryPreview=({products})=>{
const {title,items}=products
console.log('testing all',items) 
return (
    <div className="category-preview-container">
        <h2>
            <Link to={title.toLowerCase()} className='title'>{title.toUpperCase()}</Link>
        </h2>
        <div className="preview">
            {
                
                items.filter((_,idx)=>idx<4)
                .map((product)=> (<ProductCard key={product.id} product={product} />))
            }
        </div>
    </div>
)
}

export default CategoryPreview;