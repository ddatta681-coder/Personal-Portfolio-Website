import { Link } from "react-router-dom";
import { formatDate } from "./helpers";
import { ArrowLeft, ClockIcon, CalIcon, PinIcon } from "./TourDetailIcons";
import "./styles/TourDetailHero.css";
import { HashLink } from 'react-router-hash-link';

export default function TourDetailHero({ tour }) {
  return (
    <section className="td-hero">
      <div
  className="td-hero__bg"
  style={{
    backgroundImage:
      window.innerWidth > 600 ? `url(${tour.banner})` : "none",
  }}
/>
      <div className="td-hero__overlay" />
      <div className="td-hero__rule-deco" />

      <div className="td-hero__content fade-up">
        <Link to="/tours" className="td-hero__back">
          <ArrowLeft /> All Tours
        </Link>
        <div className="section-label">Upcoming Tour</div>
        <h1 className="td-hero__title">
          {tour.title.split(" ").slice(0, -1).join(" ")}{" "}
          <em>{tour.title.split(" ").slice(-1)[0]}</em>
        </h1>

        <div className="td-hero__chips">
          <span className="td-hero__chip">
            <ClockIcon /> {tour.duration}
          </span>
          <span className="td-hero__chip">
            <CalIcon /> {formatDate(tour.date)}
          </span>
          <span className="td-hero__chip">
            <PinIcon /> {tour.location}
          </span>
        </div>

        <div className="td-hero__bottom">
          <div className="td-hero__price-block">            
            <span className="td-hero__price-value">
              ₹{tour.price.toLocaleString("en-IN")}
            </span>
            <span className="td-hero__price-unit">per person</span>
          </div>
          <HashLink smooth to="/#contact" className="td-hero__cta" state={{ subject: `Booking for ${tour.title}` }}>
              Reserve Your Seat
          </HashLink>
        </div>
      </div>
    </section>
  );
}