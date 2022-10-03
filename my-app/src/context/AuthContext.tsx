import { createContext,useContext } from "react"
import {useState,useEffect} from 'react'
import {userObserver} from '../auth/firebase'

interface AppContextInterface{
  
  
}


export const AuthContext=createContext<AppContextInterface | null>(null);
export const useAuthContext=()=>{
  return useContext(AuthContext)
}
const sampleAppContext: AppContextInterface = {
  name: "Using React Context in a Typescript App",
  author: "thehappybug",
  url: "http://www.example.com",
};

const AuthContextProvider = ({children}:any ) => {

const [currentUser, setCurrentUser] = useState()

useEffect(() => {
  

  userObserver(setCurrentUser)
  
}, [])



// Provider in your app

  return (
    <div>
       
        <AuthContext.Provider value={{sampleAppContext}}>
            {children}
        </AuthContext.Provider>
        
    </div>
  )
}

export default AuthContextProvider