import { store } from '../app/store'
import { Provider } from 'react-redux'
import '../styles/globals.css'
import '../components/Header/Header.css'
import '../components/Footer/Footer.css'
import AuthContextProvider from '../contexts/AuthContext'
import { useState } from 'react'
function MyApp({ Component, pageProps }) {
  const [isMaintenance, setIsMaintenance] = useState(true)
  const h1Style = {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  }
  return (
    <AuthContextProvider>
      <Provider store={store}>
        {!isMaintenance ? (
          <Component {...pageProps} />
        ) : (
          <div style={h1Style}>
            <h1> Site is being updated ...</h1>
            <button style={{ padding: "15px", margin: "15px", cursor: "pointer" }} onClick={() => setIsMaintenance(false)}> Anyway view beta version</button>
          </div>
        )}
      </Provider>
    </AuthContextProvider>
  )
}

export default MyApp
