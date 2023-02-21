import { useState } from 'react'
import './cart-icon.styles.scss'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import CartDropDown from '../cart-dropdown/cart-dropdown.components'
const CartIcon=()=>{
    
    const [dropDownStatus,setDropDownStatus]=useState(true)
    const toggleDropDown=()=>{
        setDropDownStatus(!dropDownStatus)
      }
    return (
        <div>
            <div className='cart-icon-container'>
                <ShoppingIcon onClick={toggleDropDown} className='shopping-icon'/>
                <span className='item-count'>0</span>
            </div>
            {dropDownStatus ? (<CartDropDown/>): (<></>)}
        </div>
          
            
    )
}

export default CartIcon