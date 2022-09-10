import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'

import React, { createContext, useContext, useState } from 'react'
import { auth } from '../config/firebase'

const AuthContext = createContext({
  currentUser: null,
  handleRegister: () => Promise,
  handleLogin: () => Promise,
})

// custom hook
export const useAuth = () => useContext(AuthContext)

const AuthContextProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState("radha")

  const handleRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const value = { currentUser, handleRegister, handleLogin }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider