import './App.css'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Map } from './components/Map/Map'
import { Cards } from './components/Cards/Cards'
import { Subscription } from './components/Subscription/Subscription'
import { Features } from './components/Features/Features'
import { Currencies } from './components/Currencies/Currencies'

function App() {

  return (
    <>
      <Header />
      <Cards />
      <Features />
      <Currencies />
      <Map />
      <Subscription />
      <Footer />
    </>
  )
}

export default App
