import { store } from '../app/store'
import { Provider } from 'react-redux'
import '../styles/globals.css'
import '../components/Header/Header.css'
import '../components/Footer/Footer.css'
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
