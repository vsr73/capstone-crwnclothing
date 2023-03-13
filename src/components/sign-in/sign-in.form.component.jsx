// import { async } from "@firebase/util";
import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button,{Button_Type_Classes} from "../buttons/buttons.component";
import './sign-in.styles.scss'
import { useDispatch } from "react-redux";
import { googleSignInStart,emailSignInStart } from "../../store/user/user.action";
import { SignInAuthWithUserEmailAndPassword } from "../../utils/firebase/firebase.utils";
const defaultFormFields={
    email:'',
    password:'',
}
const SignInForm=()=>{
    const dispatch=useDispatch()
    // const {setCurrentUser}=useContext(Usercontext)
    const [formFields,setFormFields]=useState(defaultFormFields);
    
    const {email,password,}=formFields;
   

    const handleChange=(event)=>{
        const {name,value}=event.target 
        setFormFields({...formFields,[name]:value})
    }

    const signInWithGoogle=async()=>{
        dispatch(googleSignInStart())
        // alert(`Signed in as ${user.displayName}`)
        
        // const userRefDoc=createUserDocumentFromAuth(user);
        // setCurrentUser(user)
    }


    const resetFormFields=()=>{
        setFormFields(defaultFormFields)
    } 
    const handleSubmit=async(event)=>{
        event.preventDefault();
        
            try 
            {
                // const user=await SignInAuthWithUserEmailAndPassword(email,password)
                dispatch(emailSignInStart(email,password))
                // setCurrentUser(user)
                
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
    
                    <Button  type='submit' >Sign In </Button>
    
                    <Button type='button' buttonType={Button_Type_Classes.google}  onClick={signInWithGoogle}> Google Sign In </Button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;