import { useState } from 'react';
import './styles/PortfolioSection.css';

const items = [
  { src: '/static/assets/desktop/PortfolioImages/img1.jpg',  label: 'Bengal Tiger',            cls: 'gi-wide' },
  { src: '/static/assets/desktop/PortfolioImages/img2.jpg',  label: 'Sloth Bear',              cls: '' },
  { src: '/static/assets/desktop/PortfolioImages/img3.jpg',  label: 'Asiatic Lion',              cls: '' },
  { src: '/static/assets/desktop/PortfolioImages/img4.jpg',  label: 'Northern Shoveler', cls: '' },
  { src: '/static/assets/desktop/PortfolioImages/img5.jpg',  label: 'Peregrine Falcon',  cls: '' },
  { src: '/static/assets/desktop/PortfolioImages/img6.jpeg', label: 'Indian Leopard',           cls: '' },
  { src: '/static/assets/desktop/PortfolioImages/img7.jpeg', label: 'Egyptian Vulture',               cls: '' },
  { src: '/static/assets/desktop/PortfolioImages/img8.jpg',  label: 'Bengal Tiger',             cls: 'gi-wide-right' },
  { src: '/static/assets/desktop/PortfolioImages/img9.jpg',  label: 'Jungle Safari',     cls: 'gi-wide-right' },
];

export default function PortfolioSection() {
  const [active, setActive] = useState(null);

  const open  = (item) => setActive(item);
  const close = ()     => setActive(null);

  return (
    <section className="portfolio" id="portfolio">
      <div className="section-header">
        <div className="section-label">Portfolio</div>
        <h2>Curated List</h2>
      </div>

      <div className="grid-8">
        {items.map((item) => (
          <div
            key={item.label}
            className={`grid-item fade-up${item.cls ? ' ' + item.cls : ''}`}
            onClick={() => open(item)}
          >
            <img src={item.src} alt={item.label} loading="lazy" />
            <div className="grid-overlay"><p>{item.label}</p></div>
          </div>
        ))}
      </div>

      {/* ── Modal ── */}
      {active && (
        <div className="p-modal" onClick={close}>
          <button className="p-modal__close" onClick={close} aria-label="Close">✕</button>
          <div className="p-modal__box" onClick={(e) => e.stopPropagation()}>
            <img src={active.src} alt={active.label} />
            <p className="p-modal__label">{active.label}</p>
          </div>
        </div>
      )}
    </section>
  );
}