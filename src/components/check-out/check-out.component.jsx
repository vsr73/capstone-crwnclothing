
import './check-out.styles.scss'
import { useSelector } from "react-redux";
import { selectCartTotal,selectCartItems } from "../../store/cartItems/cartItems.selector";
import CheckOutItem from "../checkout-item/checkout-item.component";
import PaymentForm from '../payment-form/payment-form.compoent';
const CheckOut=()=>{

    const cartTotal=useSelector(selectCartTotal)
    const cartItems=useSelector(selectCartItems)
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

            <PaymentForm/>
        </div>
    )
}

export default CheckOut;

