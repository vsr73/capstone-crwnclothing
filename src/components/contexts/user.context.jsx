import { createContext,useState } from 'react'
import { createAction } from '../../utils/reducers/reducers.utils'
export const Usercontext=createContext({
    currentUser:null,
    setCurrentUser:()=>null
})
const INITIAL_STATE={
    currentUser:null
}

export const USER_ACTION_TYPES={
    SET_CURRENT_USER:'SET_CURRENT_USER'
}
const userReducer=(state,action)=>{
    const {type,payload}=action  
    switch(type){
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                currentUser:payload
            }
        default:
            throw new Error(`un handled type ${type} in userReducer`)

    }
}

export const UserProvider=({children})=>{
    // const [currentUser,setCurrentUser]=useState(null)
    // const [{currentUser},dispatch]=useReducer(userReducer,INITIAL_STATE)
    // const setCurrentUser=(user)=>{
    //     dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER,user))
    // }
    // const value={currentUser,setCurrentUser}

    // useEffect(()=>{
    //     const unsubscribe=onAuthStateChangedListener((user)=>{
    //         if (user){
    //             createUserDocumentFromAuth(user)
    //         }
    //         setCurrentUser(user)
    //     })
    // },[])
    const value={}
    return <Usercontext.Provider value={value} > {children}</Usercontext.Provider>
    
}

// export  UserProvider;