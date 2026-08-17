import { Link } from "react-router-dom";
import {formatDate} from "./helpers";
import "./styles/TourCard.css";

export default function TourCard({ tour }) {
  // const status = getStatus(tour);

  return (
    <Link to={`/tours/${tour.id}`} className="tour-card">
      {/* Banner */}
      <div className="tour-card__banner">
        <img src={tour.banner} alt={tour.title} className="tour-card__img" />
        <div className="tour-card__banner-overlay" />
        {/* <span className={`tour-card__status ${status.cls}`}>
          {status.label}
        </span> */}
      </div>

      {/* Body */}
      <div className="tour-card__body">
        {/* Price + Date */}
        <div className="tour-card__meta-row">
          <div className="tour-card__price">
            <span className="tour-card__price-label">From</span>
            <span className="tour-card__price-value">
              ₹{tour.price.toLocaleString("en-IN")}
            </span>
            <span className="tour-card__price-unit">per person</span>
          </div>
          <div className="tour-card__date">
            <svg
              className="tour-card__cal-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span>{formatDate(tour.date)}</span>
          </div>
        </div>

        {/* Title + Location */}
        <h3 className="tour-card__title">{tour.title}</h3>
        <p className="tour-card__location">{tour.location}</p>

        {/* Duration */}
        <div className="tour-card__info-row">
          <div className="tour-card__duration">
            <svg
              className="tour-card__clock-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>{tour.duration}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
