import useFadeIn from '../hooks/useFadeIn';
import AccoladesHero from '../components/AccoladesHero';
import AccoladesSection from '../components/AccoladesSection';

export default function Accolades() {
  useFadeIn();
  return (
    <main>
      <AccoladesHero />
      <AccoladesSection />
    </main>
  );
}
