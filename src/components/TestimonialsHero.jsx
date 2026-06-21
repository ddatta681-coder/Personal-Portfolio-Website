import './styles/TestimonialsHero.css';

export default function TestimonialsHero() {
  return (
    <section className="t-hero">
      {/* Background image — reusing a hero shot from the existing assets */}
      <div
        className="t-hero__bg"        
      />
      <div className="t-hero__overlay" />

      {/* Large decorative quote mark */}
      <div className="t-hero__deco" aria-hidden="true">"</div>

      <div className="t-hero__content fade-up">
        <div className="section-label">Voices</div>
        <h1 className="t-hero__title">
          Words from the <em>Field</em>
        </h1>
        <p className="t-hero__body">
          Those who have walked the trails, attended workshops, and collaborated
          with Debarpan — sharing their experience in their own words.
        </p>
        <div className="t-hero__rule" />
        <p className="t-hero__count">
          <span>12+</span>&nbsp;years of field mentorship &amp; collaboration
        </p>
      </div>
    </section>
  );
}