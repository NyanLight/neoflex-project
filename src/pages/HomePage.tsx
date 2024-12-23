import { Map } from '../components/Map';
import { Design } from '../components/Design';
import { Subscription } from '../components/Subscription';
import { Features } from '../components/Features';
import { Currencies } from '../components/Currencies';
import { News } from '../components/News';

export default function HomePage() {
  return (
    <>
      <Design />
      <Features />
      <Currencies />
      <Map />
      <News />
      <Subscription />
    </>
  );
}
