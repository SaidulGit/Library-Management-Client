import { createContext, useEffect, useState } from "react"
import app from "../Firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
const auth = getAuth(app);

export const AuthContext = createContext()

const Context = ({children}) => {

  const [user,setUser]= useState(null);
  const [loading,setloading]= useState(true);

  const createUser=(email,password)=>{
      setloading(true);
      return createUserWithEmailAndPassword (auth,email,password)}

      const signIn = (email,password)=>{
        setloading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logout = ()=>{
      setloading(true)
      return signOut(auth)
  }

  useEffect(()=>{
    const unSubscribe =onAuthStateChanged(auth,currentUser =>{
          setUser(currentUser);
          console.log('Current user',currentUser)
          setloading(false)
      })
      return()=>{
        return unSubscribe();
      }
  },[])


const userInfo= {
 user,
 loading,
 signIn,
 logout,
 createUser
}


  return (
    <AuthContext.Provider value={userInfo}>
          {children}
    </AuthContext.Provider>
  )
}

export default Context