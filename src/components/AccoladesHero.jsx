import './styles/AccoladesHero.css';

export default function AccoladesHero() {
  return (
    <section className="accolades-hero">
      <div className="accolades-hero__overlay" />
      <div className="accolades-hero__content fade-up">
        <div className="section-label">Recognition</div>
        <h1 className="accolades-hero__title">
          Accolades &amp; <em>Published Works</em>
        </h1>
        <p className="accolades-hero__sub">
          A record of recognition across wildlife photography, conservation
          writing, and scientific contribution.
        </p>
      </div>
    </section>
  );
}
