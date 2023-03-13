import { useContext } from 'react'
import {ShoppingIcon,CartIconContainer,ItemCount} from  './cart-icon.styles'
// import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { CartContext } from '../contexts/cart.context'
import CartDropDown from '../cart-dropdown/cart-dropdown.components'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setIsCartOpen } from '../../store/cartItems/cartItems.action'
import { selectCartCount,selectIsCartOpen } from '../../store/cartItems/cartItems.selector'
const CartIcon=()=>{
    const dispatch=useDispatch()
    // const {isCartOpen,setIsCartOpen,cartCount}=useContext(CartContext)
    const cartCount=useSelector(selectCartCount)
    const isCartOpen=useSelector(selectIsCartOpen)
    // const [dropDownStatus,setDropDownStatus]=useState(true)
    const toggleDropDown=()=>{
        dispatch(setIsCartOpen(!isCartOpen))
      }
    return (
        <div>
            <CartIconContainer>
                <ShoppingIcon onClick={toggleDropDown} className='shopping-icon'/>
                <ItemCount className='item-count'>{cartCount}</ItemCount>
            </CartIconContainer>
            {isCartOpen ? (<CartDropDown/>): (<></>)}
        </div>
          
            
    )
}

export default CartIcon