import '@/styles/globals.css'
import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/footer"
import { store } from '../state/store'
import { Provider } from 'react-redux'


export default function App({ Component, pageProps }) {
  return (
    <Provider store={store} >
      <div className="flex flex-col">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </Provider>
    )
  
}
