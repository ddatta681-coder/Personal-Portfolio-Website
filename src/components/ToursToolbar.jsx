import './styles/ToursToolbar.css'
export default function ToursToolbar({ query, setQuery, sortBy, setSortBy }) {
  return (
    <div className="tours-toolbar">
      <div className="tours-toolbar__search">
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
  );
}
