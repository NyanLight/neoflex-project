import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'
import { Map } from '../components/Map/Map'
import { Design } from '../components/Design/Design'
import { Subscription } from '../components/Subscription/Subscription'
import { Features } from '../components/Features/Features'
import { Currencies } from '../components/Currencies/Currencies'

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