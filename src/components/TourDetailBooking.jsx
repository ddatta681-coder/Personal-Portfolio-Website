import { UsersIcon } from "./TourDetailIcons";
import "./styles/TourDetailBooking.css";
import { HashLink } from 'react-router-hash-link';


export default function TourDetailBooking({ price, seatsAvailable, seatsTotal, bookingInfo, tourTitle }) {
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
          <div className="td-booking__price-details">
            <div className="td-booking__price-row">
              <span>Advance to confirm</span>
              <strong>₹{bookingInfo.advance.toLocaleString("en-IN")}</strong>
            </div>
            <div className="td-booking__price-row">
              <span>Balance due</span>
              <strong>{bookingInfo.balance}</strong>
            </div>
          </div>
          <p className="td-booking__cancel">{bookingInfo.cancellationPolicy}</p>
        </div>

        <div className="td-booking__contact-card">
          <h3 className="td-booking__contact-title">Get in Touch</h3>
          <p className="td-booking__contact-sub">
            Reserve your seat or ask any questions — I respond personally
            to every inquiry.
          </p>
          <div className="td-booking__contact-links">          
            <HashLink smooth to="/#contact" className="td-booking__cta td-booking__cta--primary">
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