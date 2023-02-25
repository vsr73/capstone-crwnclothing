import { useContext } from 'react'
import {ShoppingIcon,CartIconContainer,ItemCount} from  './cart-icon.styles'
// import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { CartContext } from '../contexts/cart.context'
import CartDropDown from '../cart-dropdown/cart-dropdown.components'
const CartIcon=()=>{
    const {isCartOpen,setIsCartOpen,cartCount}=useContext(CartContext)
    // const [dropDownStatus,setDropDownStatus]=useState(true)
    const toggleDropDown=()=>{
        setIsCartOpen(!isCartOpen)
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