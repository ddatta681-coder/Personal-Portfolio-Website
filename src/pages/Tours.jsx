import { useState, useMemo } from "react";
import toursData from "../data/tours.json";

import ToursHero from "../components/ToursHero";
import ToursDashboard from "../components/ToursDashboard";
import CustomizedToursPanel from "../components/CustomizedToursPanel";
import MemoriesSignoff from "../components/MemoriesSignoff";

export default function Tours() {
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("date-asc");

  const tours = toursData.tours;

  const filtered = useMemo(() => {
    let list = tours.filter((t) =>
      t.title.toLowerCase().includes(query.toLowerCase())
    );

    list = [...list].sort((a, b) => {
      switch (sortBy) {
        case "date-asc":
          return new Date(a.date) - new Date(b.date);
        case "date-desc":
          return new Date(b.date) - new Date(a.date);
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        default:
          return 0;
      }
    });

    return list;
  }, [query, sortBy, tours]);

  return (
    <main className="tours-page">
      <ToursHero total={tours.length} />
      <ToursDashboard
        tours={tours}
        filtered={filtered}
        query={query}
        setQuery={setQuery}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <CustomizedToursPanel/>
      <MemoriesSignoff />
    </main>
  );
}
