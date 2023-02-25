
import Button,{Button_Type_Classes} from '../buttons/buttons.component'
import './product-card.styles.scss'
import { useContext } from 'react'
import { CartContext } from '../contexts/cart.context'
const ProductCard=({product})=>{
    const {name,price,imageUrl}=product
    const {addCartItems}=useContext(CartContext)
    const addProductToCart=()=>{
        addCartItems(product)
    }
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
            <Button buttonType={Button_Type_Classes.inverted} onClick={addProductToCart}>add to card</Button>
        </div>
    )
}

export default ProductCard