import { store } from '../app/store'
import { Provider } from 'react-redux'
import '../styles/globals.css'
import '../components/Header/Header.css'
import '../components/Footer/Footer.css'
import AuthContextProvider from '../contexts/AuthContext'
function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </AuthContextProvider>
  )
}

export default MyApp
