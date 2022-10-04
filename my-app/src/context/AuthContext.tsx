import { createContext,useContext } from "react"
import {useState,useEffect} from 'react'
import {userObserver} from '../auth/firebase'




export const AuthContext=createContext<any>(null);
export const useAuthContext=()=>{
  return useContext(AuthContext)
}


const AuthContextProvider = ({children}:any ) => {

const [currentUser, setCurrentUser] = useState()
// const [favorites, setFavorites] = useState([])
useEffect(() => {
  

  userObserver(setCurrentUser)
  
}, [])

console.log(currentUser);


// Provider in your app

  return (
    <div>
       
        <AuthContext.Provider value={{currentUser} }>
            {children}
        </AuthContext.Provider>
        
    </div>
  )
}

export default AuthContextProvider