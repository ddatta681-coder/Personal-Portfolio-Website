import { UsersIcon } from "./TourDetailIcons";
import "./styles/TourDetailBooking.css";
import { HashLink } from "react-router-hash-link";

export default function TourDetailBooking({
  price,
  seatsAvailable,
  seatsTotal,
  bookingInfo,
  tourTitle,
}) {
  return (
    <section className="td-section td-booking fade-up" id="booking">
      <div className="td-section__header">
        <div className="section-label">Secure Your Place</div>
        <h2 className="td-section__title">Pricing &amp; Booking</h2>
      </div>

      <div className="td-booking__grid">
        <div className="td-booking__price-card">
          <span className="td-booking__price-label">Tour Price</span>
          <div className="td-booking__price-main">
            ₹{price.toLocaleString("en-IN")}
            <span className="td-booking__price-unit"> / person</span>
          </div>
          <a
            href="/static/assets/pdfs/CancellationPolicy.pdf"
            download="Cancellation_Policy.pdf"
            className="td-booking__cancel-btn"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Cancellation Policy
          </a>
        </div>

        <div className="td-booking__contact-card">
          <h3 className="td-booking__contact-title">Get in Touch</h3>
          <p className="td-booking__contact-sub">
            Reserve your seat or ask any questions — I respond personally to
            every inquiry.
          </p>
          <div className="td-booking__contact-links">
            <HashLink
              smooth
              to="/#contact"
              state={{ subject: `Booking for ${tourTitle}` }}
              className="td-booking__cta td-booking__cta--primary"
            >
              Email to Book
            </HashLink>
            <a
              href={`tel:${bookingInfo.contactPhone.replace(/\s/g, "")}`}
              className="td-booking__cta td-booking__cta--secondary"
            >
              {bookingInfo.contactPhone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
