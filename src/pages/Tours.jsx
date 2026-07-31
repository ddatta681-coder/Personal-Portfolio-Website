import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import './styles/Tours.css';
import toursData from '../data/tours.json';



/* ── Helpers ────────────────────────────────────────────────────────────── */
// function getStatus(tour) {
//   const ratio = tour.seatsAvailable / tour.seatsTotal;
//   if (ratio === 0) return { label: 'Fully Booked', cls: 'status--full' };
//   if (ratio <= 0.2) return { label: 'Filling Fast', cls: 'status--urgent' };
//   if (ratio <= 0.5) return { label: 'Limited Seats', cls: 'status--limited' };
//   return { label: 'Available', cls: 'status--open' };
// }

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

/* ── Component ──────────────────────────────────────────────────────────── */
export default function Tours() {
  const [query, setQuery] = useState('');
  const [sortBy, setSortBy] = useState('date-asc');

  const tours = toursData.tours;
  console.log('tours data:', tours);

  const filtered = useMemo(() => {
    let list = tours.filter((t) =>
      t.title.toLowerCase().includes(query.toLowerCase())
    );

    list = [...list].sort((a, b) => {
      switch (sortBy) {
        case 'date-asc':
          return new Date(a.date) - new Date(b.date);
        case 'date-desc':
          return new Date(b.date) - new Date(a.date);
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        default:
          return 0;
      }
    });

    return list;
  }, [query, sortBy, tours]);

  return (
    <main className="tours-page">
      {/* ── Hero Section ───────────────────────────────────────────────── */}
      <section className="tours-hero">
        <div className="tours-hero__bg" />
        <div className="tours-hero__overlay" />

        <div className="tours-hero__content">
          <div className="section-label">Upcoming</div>
          <h1 className="tours-hero__title">
            Explore our <em>Tours</em>
          </h1>
          <p className="tours-hero__body">
            Guided wildlife expeditions across India's most iconic reserves —
            crafted for photographers, naturalists, and curious travellers alike.
          </p>
          <div className="tours-hero__rule" />
          <p className="tours-hero__count">
            <span>{tours.length}</span>&nbsp;tours scheduled for 2026–2027
          </p>
        </div>
      </section>

      {/* ── Dashboard ──────────────────────────────────────────────────── */}
      <section className="tours-dashboard">
        <div className="tours-dashboard__inner">

          {/* Search & Sort Bar */}
          <div className="tours-toolbar ">
            <div className="tours-toolbar__search">
              <svg className="tours-toolbar__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                placeholder="Search tours by name…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="tours-toolbar__input"
              />
            </div>

            <div className="tours-toolbar__sorts">
              <label className="tours-toolbar__label">Sort by</label>
              <div className="tours-toolbar__sort-group">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="tours-toolbar__select"
                >
                  <option value="date-asc">Date: Earliest First</option>
                  <option value="date-desc">Date: Latest First</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results count */}
          <p className="tours-dashboard__count">
            Showing <span>{filtered.length}</span> of {tours.length} tour{tours.length !== 1 ? 's' : ''}
          </p>

          {/* ── Cards Grid ─────────────────────────────────────────────── */}
          <div className="tours-grid">
            {filtered.length === 0 ? (
              <p className="tours-grid__empty">No tours match your search.</p>
            ) : (
              filtered.map((tour) => {
                {/* const status = getStatus(tour); */}
                return (
                  <Link
                    to={`/tours/${tour.id}`}
                    key={tour.id}
                    className="tour-card"
                  >
                    {/* Banner */}
                    <div className="tour-card__banner">
                      <img
                        src={tour.banner}
                        alt={tour.title}
                        className="tour-card__img"
                      />
                      <div className="tour-card__banner-overlay" />
                      {/* <span className={`tour-card__status ${status.cls}`}>
                        {status.label}
                      </span> */}
                    </div>

                    {/* Body */}
                    <div className="tour-card__body">
                      <div className="tour-card__meta-row">
                        <div className="tour-card__price">
                          <span className="tour-card__price-label">From</span>
                          <span className="tour-card__price-value">
                            ₹{tour.price.toLocaleString('en-IN')}
                          </span>
                          <span className="tour-card__price-unit">per person</span>
                        </div>
                        <div className="tour-card__date">
                          <svg className="tour-card__cal-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                          </svg>
                          <span>{formatDate(tour.date)}</span>
                        </div>
                      </div>

                      <h3 className="tour-card__title">{tour.title}</h3>
                      <p className="tour-card__location">{tour.location}</p>

                      <div className="tour-card__info-row">
                        <div className="tour-card__seats">
                          <svg className="tour-card__seat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                          </svg>
                          <span>
                            <strong>{tour.seatsAvailable}</strong> / {tour.seatsTotal} seats
                          </span>
                        </div>
                        <div className="tour-card__duration">
                          <svg className="tour-card__clock-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                          </svg>
                          <span>{tour.duration}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })
            )}
          </div>
        </div>
      </section>
    </main>
  );
}