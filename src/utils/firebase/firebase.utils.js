import { initializeApp } from "firebase/app";
import {getAuth,
     GoogleAuthProvider,
    signInWithRedirect,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth';
import {
  getFirestore,doc,getDoc,setDoc
} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyDuHdikZUQhAN8D2XrExOwtrMx2mESe7nk",

  authDomain: "crwn-clothing-db-1de96.firebaseapp.com",

  projectId: "crwn-clothing-db-1de96",

  storageBucket: "crwn-clothing-db-1de96.appspot.com",

  messagingSenderId: "795868347703",

  appId: "1:795868347703:web:dd451a3b79bb6da97daeb2"

};


// Initialize Firebase 
const firebaseapp=initializeApp(firebaseConfig);

const googleProvider=new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt:"select_account"
})

export const auth=getAuth();
export const signInWithGooglePopup=()=>signInWithPopup(auth,googleProvider);
export const signInWithGoogleRedirect=()=>signInWithRedirect(auth,googleProvider);
export const db=getFirestore()

export const createUserDocumentFromAuth=async(userAuth,
  additionalInformation={})=>{
  if (!userAuth) return ;

  const userRefDoc=doc(db,'users',userAuth.uid)

  console.log(userRefDoc)

  const userSnapshot=await getDoc(userRefDoc)

  console.log(userSnapshot.exists()) 
  if (!userSnapshot.exists()){
    const {displayName,email}=userAuth;
    const createdAt=new Date();
    try {
      await setDoc(userRefDoc,{
        displayName,
        email,
        createdAt,
        ...additionalInformation
      })
    }
    catch (error) {
      console.log('error creating the user:',error)
    }
  }
  return userRefDoc;
}

export const createAuthrWithUserEmailAndPassword=async(email,password)=>{
  if(!email||!password) return ;
   return await createUserWithEmailAndPassword(auth,email,password)

}

export const SignInAuthrWithUserEmailAndPassword=async(email,password)=>{
  if(!email||!password) return ;
   return await signInWithEmailAndPassword(auth,email,password)

}