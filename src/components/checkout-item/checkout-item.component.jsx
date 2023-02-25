import './checkout-item.styles.scss'
import { CartContext } from '../contexts/cart.context'
import { useContext } from 'react'
const CheckOutItem=({cartItem})=>{
    const {name,imageUrl,price,quantity}=cartItem
    
    const {clearItemFromCart,removeItemFromCart,addCartItems}=useContext(CartContext)
    const clearCartItemHandler=()=>{
        clearItemFromCart(cartItem)
    }

    const removeCartItemHandler=()=>{
        removeItemFromCart(cartItem)
    }

    const addItemHandler=()=>{
        addCartItems(cartItem)
    }
    return (
        <div key={cartItem.id} className='checkout-item-container '>

            <div className='image-container'>
            <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'>{name}</span>
            
            <span className='quantity'>
                <div className="arrow" onClick={removeCartItemHandler}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={addItemHandler}> &#10095;</div>
               
                </span>
            <span className='price'>${price}</span>
            <div className='remove-button' onClick={clearCartItemHandler}>&#10005;</div>
        </div>
    )
}

export default CheckOutItem;