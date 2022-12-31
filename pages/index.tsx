import TypingAnimation from '../components/TypingAnimation';
import CatCarousel from '../components/CatCarousel';
import WorldMap from '../components/WorldMap';
import SeaWaveAnimation from '../components/SeaWaveAnimation';
import RotatingCube from '../components/RotatingCube';
import BitcoinChart from '../components/BitcoinChart';

export default function Home() {
  return (
    <>
      <div className="w-1/2 mx-auto text-center">
        <div className="py-4">
          <TypingAnimation />
        </div>

        <CatCarousel />

        <WorldMap />

        <SeaWaveAnimation />

        <RotatingCube />

        <BitcoinChart />
      </div>
    </>
  );
}
