import { useState } from "react";
import FormInput from "../form-input/form-input.component";
// import {signInWithGooglePopup} from '../../utils/firebase/firebase.utils'
// import {auth,createUserDocumentFromAuth,createAuthrWithUserEmailAndPassword} from '../../utils/firebase/firebase.utils'
// import { Usercontext } from "../contexts/user.context";
import { createAuthrWithUserEmailAndPassword,createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import Button from "../buttons/buttons.component";
import './sign-up.styles.scss'
const defaultFormFields={
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}


const SignUpForm=()=>{
    const [formFields,setFormFields]=useState(defaultFormFields);
    
    const {displayName,email,password,confirmPassword}=formFields;

    //  const {setCurrentUser}=useContext(Usercontext)
    const handleChange=(event)=>{
        const {name,value}=event.target 
        setFormFields({...formFields,[name]:value})
    }

    // const logGoogleUser=async()=>{
    //     const {user}=await signInWithGooglePopup();
        
    //     //alert()
    //     const userRefDoc=createUserDocumentFromAuth(user);
    // }

    const handleSubmit=async(event)=>{
        event.preventDefault();
        if (password==confirmPassword)
        {
            try 
            {
                const response=await createAuthrWithUserEmailAndPassword(email,password)
                
            // const user=await createUserDocumentFromAuth(response.user,{displayName})
            resetFormFields();
            
        }

            catch (error) {
                if (error.code=='auth/email-already-in-use'){
                    alert('cannot create user,email already used',)
                }
                console.error('error aaya tha',error);
            }}
        else{
            alert('passwords are not matching')
            return ;
        }
        
    }

    const resetFormFields=()=>{
        setFormFields(defaultFormFields)
    }
    return (
        <div className="sign-up-container">
            
            <h2>Don't have an account?</h2>
            <h2>Sign up</h2>
            
            <form onSubmit={handleSubmit}>
                <FormInput 
                    label={'Display Name'}
                    type="text" 
                    name='displayName'
                    value={displayName}
                    required 
                    onChange={handleChange}
                     />

              
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

                <FormInput  
                    label='Confirm Password'
                    type='password' 
                    name="confirmPassword" 
                    value={confirmPassword} 
                    required 
                    onChange={handleChange} />

                <div className="buttons-container">
                    <Button  type='submit'>sign up </Button>
                    {/* <Button buttonType='google' onClick={logGoogleUser}>sign  google </Button> */}
                </div>
            </form>
        </div>
    );
};

export default SignUpForm;