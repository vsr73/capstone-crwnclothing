
import Button from '../buttons/buttons.component'
import './product-card.styles.scss'
const ProductCard=({product})=>{
    const {name,price,imageUrl}=product
    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={name}/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            {/* {products.map((product)=>{
                return (
                    <ProductCard key={product.id} product={product}/>
                )
            })} */}
            <Button buttonType='inverted'>add to card</Button>
        </div>
    )
}

export default ProductCard