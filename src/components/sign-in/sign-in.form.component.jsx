import { async } from "@firebase/util";
import { useState } from "react";
import { createAuthrWithUserEmailAndPassword,createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../buttons/buttons.component";
import './sign-in.styles.scss'
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import { SignInAuthrWithUserEmailAndPassword } from "../../utils/firebase/firebase.utils";
const defaultFormFields={
    email:'',
    password:'',
}
const SignInForm=()=>{
    const [formFields,setFormFields]=useState(defaultFormFields);
    
    const {displayName,email,password,confirmPassword}=formFields;
    console.log(formFields)

    const handleChange=(event)=>{
        const {name,value}=event.target 
        setFormFields({...formFields,[name]:value})
    }

    const signInWithGoogle=async()=>{
        const {user}=await signInWithGooglePopup();
        alert(`Signed in as ${user.displayName}`)
        const userRefDoc=createUserDocumentFromAuth(user);
    }


    const resetFormFields=()=>{
        setFormFields(defaultFormFields)
    } 
    const handleSubmit=async(event)=>{
        event.preventDefault();
        
            try 
            {
                const response=await SignInAuthrWithUserEmailAndPassword(email,password)
                 console.log('sign in hua ye hai iske response',response)
            // await createUserDocumentFromAuth(response.user,{displayName})
            resetFormFields();
        }

            catch (error) {
                if(error.code=='auth/wrong-password'){
                    alert('invalid details')
                }
                switch(error.code){
                    case 'auth/wrong-password':
                        alert('invalid details')
                        break;
                    case 'auth/no-user-found':
                        alert('no info available please sign up')
                        break;
                    default:
                        console.log(error)
                }
                
            }
       
        
    }

    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>
                Sign up with Email and password
            </span>
            <form onSubmit={handleSubmit}>
               
                <FormInput 
                    label={'Email'}
                    type="email" 
                    name="email" 
                    value={email} 
                    required onChange={handleChange}  />

                <FormInput 
                    label={'Password'}
                    type='password' 
                    name="password"
                    value={password} required  
                    onChange={handleChange}
                    />
                <div className="buttons-container">
    
                    <Button  type='submit'>Sign In </Button>
    
                    <Button type='button' buttonType='google'  onClick={signInWithGoogle}> Google Sign In </Button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;