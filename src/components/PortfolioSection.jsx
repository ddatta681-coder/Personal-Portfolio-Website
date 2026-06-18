import './styles/PortfolioSection.css';

const items = [
  { src: '/static/assets/desktop/PortfolioImages/img1.jpg',  label: 'Tigers',            cls: 'gi-wide' },
  { src: '/static/assets/desktop/PortfolioImages/img2.jpg',  label: 'Bear',              cls: '' },
  { src: '/static/assets/desktop/PortfolioImages/img3.jpg',  label: 'Lion',              cls: '' },
  { src: '/static/assets/desktop/PortfolioImages/img4.jpg',  label: 'Northern Shoveler', cls: '' },
  { src: '/static/assets/desktop/PortfolioImages/img5.jpg',  label: 'Peregrine Falcon',  cls: '' },
  { src: '/static/assets/desktop/PortfolioImages/img6.jpeg', label: 'Leopard',           cls: '' },
  { src: '/static/assets/desktop/PortfolioImages/img7.jpeg', label: 'Owl',               cls: '' },
  { src: '/static/assets/desktop/PortfolioImages/img8.jpg',  label: 'Tiger',             cls: 'gi-wide-right' },
  { src: '/static/assets/desktop/PortfolioImages/img9.jpg',  label: 'Jungle Safari',     cls: 'gi-wide-right' },
];

export default function PortfolioSection() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="section-header">
        <div className="section-label">Portfolio</div>
        <h2>Curated List</h2>
      </div>
      <div className="grid-8">
        {items.map(({ src, label, cls }) => (
          <div key={label} className={`grid-item fade-up${cls ? ' ' + cls : ''}`}>
            <img src={src} alt={label} loading="lazy" />
            <div className="grid-overlay"><p>{label}</p></div>
          </div>
        ))}
      </div>
    </section>
  );
}