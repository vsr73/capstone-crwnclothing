// import { useEffect } from 'react'
// import {getRedirectResult} from 'firebase/auth'
// import {auth,createUserDocumentFromAuth,signInWithGoogleRedirect} from '../../utils/firebase/firebase.utils'
import SignUpForm from '../../components/sign-up-form/sign-up.form.component'
import SignInForm from '../../components/sign-in/sign-in.form.component'
import './authtentication.styles.scss'
const Authentication=()=>{

    // useEffect(  ()=> {

    //     async function run(){
    //         const response= await getRedirectResult(auth);
    //         console.log(response);
    //         if (response){
    //             const userRefDoc=createUserDocumentFromAuth(response.user);
    //             console.log(userRefDoc)
    //         }
    // }
    // run()
    // },[]);

    // const logGoogleUser=async()=>{
    //     const {user}=await signInWithGooglePopup();
    //     const userRefDoc=createUserDocumentFromAuth(user);
    // }

    
    
    return(
    <div className='authentication-container' >
        
        {/* <button onClick={signInWithGoogleRedirect}>sign in with google Redirect</button> */}
        <SignInForm/>
        <SignUpForm/>
        {/* <Button buttonType='google' onClick={logGoogleUser}>sign in with google popup</Button> */}

    </div>)
}

export default Authentication