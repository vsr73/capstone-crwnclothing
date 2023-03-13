import { CardElement,useStripe,useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useSelector } from "react-redux";
import {Button_Type_Classes} from "../buttons/buttons.component";
import { selectCartTotal } from "../../store/cartItems/cartItems.selector";
import {selectCurrentUser} from "../../store/user/user.selector";
import { PaymentFormContainer,FormContainer ,PaymentButton} from "./payment-form.styles";
const PaymentForm=()=>{
    const stripe=useStripe()
    const elements=useElements()
    const amount=useSelector(selectCartTotal)
    const user=useSelector(selectCurrentUser)
    const [isProcessing,setIsProcessing]=useState(false)
    const paymentHandler=async(e)=>{
        e.preventDefault()
        if(! stripe || ! elements){
            return ;
        }
        setIsProcessing(true)
        const response =await fetch('/.netlify/functions//create-payment-intent',{
            method:'post',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({amount:amount*100})
        }).then(res=>res.json())
        const {paymentIntent:{client_secret}}=response
        const paymentResult=await stripe.confirmCardPayment(client_secret,
            {payment_method:{
                card:elements.getElement(CardElement),
                billing_details:{
                    name:user?user.displayName:'Guest',
                    

                }
            }
        }
        )
            setIsProcessing(false)
        if (paymentResult.error){

            alert('Payment failed')
            console.log(paymentResult.error)
        }
        else{
            if(paymentResult.paymentIntent.status=='succeeded'){
                alert('payment successful')
            }
        }
        
    }
    return(
        <PaymentFormContainer>
            
            <FormContainer >
            <h2>Card Details</h2>
                <CardElement/>
                <PaymentButton isLoading={isProcessing} button={Button_Type_Classes.inverted} onClick={paymentHandler}>pay now</PaymentButton>
            </FormContainer>
        </PaymentFormContainer>
    )
}

export default PaymentForm