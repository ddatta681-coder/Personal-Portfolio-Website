import useFadeIn from '../hooks/useFadeIn';
import HeroSlider        from '../components/HeroSlider';
import AboutSection      from '../components/AboutSection';
import PortfolioSection  from '../components/PortfolioSection';
import WildlifeSection   from '../components/WildlifeSection';
import ContactSection    from '../components/ContactSection';

export default function Home() {
  useFadeIn();

  return (
    <main>
      <HeroSlider />
      <AboutSection />
      <PortfolioSection />
      <WildlifeSection />
      <ContactSection />
    </main>
  );
}