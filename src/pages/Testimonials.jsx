import useFadeIn from '../hooks/useFadeIn';
import TestimonialsHero from '../components/TestimonialsHero';
import TestimonialsGrid from '../components/TestimonialsGrid';

export default function Testimonials() {
  useFadeIn();
  return (
    <main>
      <TestimonialsHero />
      <TestimonialsGrid />
    </main>
  );
}