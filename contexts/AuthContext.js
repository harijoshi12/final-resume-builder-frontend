import { createUserWithEmailAndPassword, getIdToken, GoogleAuthProvider, onAuthStateChanged, onIdTokenChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../config/firebase'

const AuthContext = createContext({
  currentUser: null,
  handleRegister: () => Promise,
  handleLogin: () => Promise,
  handleGoogleLogin: () => Promise,
  handleLogout: () => Promise,
  currentToken: null,
})

// custom hook
export const useAuth = () => useContext(AuthContext)

// component
const AuthContextProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState(null)
  const [currentToken, setCurrentToken] = useState(null)

  useEffect(() => {
    const unsubscribe = onIdTokenChanged(auth, async (user) => {
      // const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log('token changed');
      setCurrentUser(await user)
      setCurrentToken(await user?.getIdToken())
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

  const value = { currentUser, handleRegister, handleLogin, handleLogout, handleGoogleLogin, currentToken }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider