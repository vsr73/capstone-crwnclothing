import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";
import Button from "../buttons/buttons.component";
import './check-out.styles.scss'
import CheckOutItem from "../checkout-item/checkout-item.component";
const CheckOut=()=>{

    const {cartTotal,cartItems,addCartItems,removeItemFromCart,addCartItem}=useContext(CartContext)

    return ( 
      
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>description</span>
                </div>
                <div className="header-block">
                    <span>quantity</span>
                </div>
                <div className="header-block">
                    <span>price</span>
                </div>
                <div className="header-block">
                    <span>reomove</span>
                </div>
            </div>
            {
            cartItems.map((cartItem)=>
            
                {
                const {id} =cartItem
                // const decHandler=()=>{
                //     decreaseProducts(cartItem)
                // }
                
                return (
                    <CheckOutItem key={id} cartItem={cartItem}/>
                  
                )
                })
            }
            <span className="total">total:${cartTotal}</span>
        </div>
    )
}

export default CheckOut;

