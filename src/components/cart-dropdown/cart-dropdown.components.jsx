
import Button from '../buttons/buttons.component';
import './cart-dropdown.styles.scss'
const CartDropDown=()=>{
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>

            </div>
            <Button>Go To CheckOut</Button>
        </div>
    )
}

export default CartDropDown;