import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Map } from '../components/Map'
import { Design } from '../components/Design'
import { Subscription } from '../components/Subscription'
import { Features } from '../components/Features'
import { Currencies } from '../components/Currencies'

export default function HomePage() {
    return (
        <>
        <Header />
        <Design />
        <Features />
        <Currencies />
        <Map />
        <Subscription />
        <Footer />
      </>
    )
}