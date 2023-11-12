import { createContext } from "react"

const AuthContext = createContext()

const Context = ({children}) => {

const userInfo= {

}


  return (
    <AuthContext.Provider value={userInfo}>
          {children}
    </AuthContext.Provider>
  )
}

export default Context