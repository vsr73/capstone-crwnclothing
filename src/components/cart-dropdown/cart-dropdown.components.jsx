
import { CartDropDownContainer,EmptyMessage,CartItems } from './cart-dropdown.styles'

import Button from '../buttons/buttons.component';
import CartItem from '../cart-item/cart-item.component';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { selectCartItems } from '../../store/cartItems/cartItems.selector';
import { useSelector } from 'react-redux';
const CartDropDown=()=>{
    const navigate=useNavigate()
    const checkOutHandler=()=>{
        navigate('/checkout')
    }
    // const {cartItems}=useContext(CartContext)
    const cartItems=useSelector(selectCartItems)
    return(            
        <CartDropDownContainer>
            <CartItems>

                {
                    cartItems && cartItems.length ? (
                        cartItems.map((item)=>(
                            <CartItem key={item.id} cartItem={item}/>
                        )
                    
                )
                    ):(
                        <EmptyMessage> Your cart is empty</EmptyMessage>
                    )
                }
                
            </CartItems>
            
            <Link to='/checkout'>
            <Button  onClick={checkOutHandler}>CheckOut</Button>
            </Link>
        </CartDropDownContainer>
    )
}

export default CartDropDown;