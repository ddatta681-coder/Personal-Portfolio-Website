import ToursToolbar from "./ToursToolbar";
import ToursGrid from "./ToursGrid";
import './styles/ToursDashboard.css'

export default function ToursDashboard({
  tours,
  filtered,
  query,
  setQuery,
  sortBy,
  setSortBy,
}) {
  return (
    <section className="tours-dashboard">
      <div className="tours-dashboard__inner">
        <ToursToolbar
          query={query}
          setQuery={setQuery}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        <p className="tours-dashboard__count">
          Showing <span>{filtered.length}</span> of {tours.length} tour
          {tours.length !== 1 ? "s" : ""}
        </p>

        <ToursGrid tours={filtered} />
      </div>
    </section>
  );
}
