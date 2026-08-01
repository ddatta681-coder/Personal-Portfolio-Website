import "./styles/TourDetailItinerary.css";

export default function TourDetailItinerary({ itinerary }) {
  return (
    <section className="td-section td-itinerary-section fade-up">
      <div className="td-section__header">
        <div className="section-label">Day by Day</div>
        <h2 className="td-section__title">Itinerary</h2>
      </div>
      <div className="td-itinerary">
        {itinerary.map((item) => (
          <div className="td-itinerary__item" key={item.day}>
            <div className="td-itinerary__day-col">
              <span className="td-itinerary__day-num">Day {item.day}</span>
              <div className="td-itinerary__connector" />
            </div>
            <div className="td-itinerary__card">
              <h3 className="td-itinerary__title">{item.title}</h3>
              <p className="td-itinerary__desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}