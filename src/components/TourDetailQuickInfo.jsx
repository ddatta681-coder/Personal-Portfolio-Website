import { formatDate } from "./helpers";
import "./styles/TourDetailQuickInfo.css";

export default function TourDetailQuickInfo({ tour }) {
  return (
    <section className="td-quickinfo fade-up">
      <div className="td-quickinfo__grid">
        <div className="td-quickinfo__item">
          <span className="td-qi-label">Duration</span>
          <span className="td-qi-value">{tour.duration}</span>
        </div>
        <div className="td-quickinfo__item">
          <span className="td-qi-label">Departure Date</span>
          <span className="td-qi-value">{formatDate(tour.date)}</span>
        </div>
        <div className="td-quickinfo__item">
          <span className="td-qi-label">Group Size</span>
          <span className="td-qi-value">Max {tour.seatsTotal} participants</span>
        </div>
        <div className="td-quickinfo__item">
          <span className="td-qi-label">Availability</span>
          <span
            className={`td-qi-value td-qi-value--seats ${
              tour.seatsAvailable
                ? "td-qi-value--seats-yes"
                : "td-qi-value--seats-no"
            }`}
          >
            {tour.seatsAvailable ? "Seats Available" : "Registration Complete"}
          </span>
        </div>
        <div className="td-quickinfo__item">
          <span className="td-qi-label">Location</span>
          <span className="td-qi-value">{tour.location}</span>
        </div>
        <div className="td-quickinfo__item">
          <span className="td-qi-label">Price</span>
          <span className="td-qi-value">
            ₹{tour.price.toLocaleString("en-IN")} / person
          </span>
        </div>
      </div>
    </section>
  );
}