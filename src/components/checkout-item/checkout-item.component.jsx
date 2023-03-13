import './checkout-item.styles.scss'
import { useDispatch, useSelector } from 'react-redux'
import { removeItemFromCart,addItemToCart,clearItemFromCart } from '../../store/cartItems/cartItems.action'
import { selectCartItems } from '../../store/cartItems/cartItems.selector'
const CheckOutItem=({cartItem})=>{
    const dispatch=useDispatch()
    const {name,imageUrl,price,quantity}=cartItem
    const cartItems=useSelector(selectCartItems)
    const clearCartItemHandler=()=>{
        dispatch(clearItemFromCart(cartItems,cartItem))
    }

    const removeCartItemHandler=()=>{
        dispatch(removeItemFromCart(cartItems,cartItem))
    }

    const addItemHandler=()=>{
        dispatch(addItemToCart(cartItems,cartItem))
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