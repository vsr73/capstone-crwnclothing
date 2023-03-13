import styled from "styled-components";
import Button from "../buttons/buttons.component";
export const PaymentFormContainer=styled.div`
height:300px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
export const FormContainer=styled.div`
height:100px;
min-width:500px;
`
export const PaymentButton=styled(Button)`
margin-left:auto;
margin-top:30px
`