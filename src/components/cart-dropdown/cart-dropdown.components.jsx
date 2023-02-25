
import { CartDropDownContainer,EmptyMessage,CartItems } from './cart-dropdown.styles'

import Button from '../buttons/buttons.component';
import CartItem from '../cart-item/cart-item.component';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../contexts/cart.context';
import { useNavigate } from 'react-router-dom'
const CartDropDown=()=>{
    const navigate=useNavigate()
    const checkOutHandler=()=>{
        navigate('/checkout')
    }
    const {cartItems}=useContext(CartContext)
    const cartItem={name:'jeans',quantity:2}
    return(            
        <CartDropDownContainer>
            <CartItems>

                {
                    cartItems.length ? (
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
            <Button  onClick={() =>( navigate('/checkout'))}>CheckOut</Button>
            </Link>
        </CartDropDownContainer>
    )
}

export default CartDropDown;