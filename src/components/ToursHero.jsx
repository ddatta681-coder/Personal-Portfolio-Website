import './styles/ToursHero.css'
export default function ToursHero({ total }) {
  return (
    <section className="tours-hero">
      <div className="tours-hero__bg" />
      <div className="tours-hero__overlay" />

      <div className="tours-hero__content">
        <div className="section-label">Upcoming</div>
        <h1 className="tours-hero__title">
          Explore with<em>Debarpan</em>
        </h1>
        <p className="tours-hero__body">
          Guided wildlife expeditions across India's most iconic reserves —
          crafted for photographers, naturalists, and curious travellers alike.
        </p>
        <div className="tours-hero__rule" />
        <p className="tours-hero__count">
          <span>{total}</span>&nbsp;tours scheduled for 2026–2027
        </p>
      </div>
    </section>
  );
}
