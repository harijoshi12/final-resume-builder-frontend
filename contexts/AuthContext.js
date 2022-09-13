import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../config/firebase'

const AuthContext = createContext({
  currentUser: null,
  handleRegister: () => Promise,
  handleLogin: () => Promise,
  handleGoogleLogin: () => Promise,
  handleLogout: () => Promise,
})

// custom hook
export const useAuth = () => useContext(AuthContext)

// component
const AuthContextProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState("radha")

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
    return () => unsubscribe()
  }, [])

  const handleRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const handleGoogleLogin = () => {
    const gooleProvider = new GoogleAuthProvider()
    return signInWithPopup(auth, gooleProvider)
  }

  const handleLogout = () => {
    return signOut(auth)
  }

  const value = { currentUser, handleRegister, handleLogin, handleLogout, handleGoogleLogin }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider