import TourCard from "./TourCard";
import './styles/ToursGrid.css'

export default function ToursGrid({ tours }) {
  if (tours.length === 0) {
    return <p className="tours-grid__empty">No tours match your search.</p>;
  }

  return (
    <div className="tours-grid">
      {tours.map((tour) => (
        <TourCard key={tour.id} tour={tour} />
      ))}
    </div>
  );
}
