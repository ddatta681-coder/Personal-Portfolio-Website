import { BedIcon, ForkIcon, CarIcon } from "./TourDetailIcons";
import "./styles/TourDetailLogistics.css";

export default function TourDetailLogistics({ accommodation, meals, transportation }) {
  return (
    <section className="td-section td-logistics fade-up">
      <div className="td-section__header">
        <div className="section-label">What's Included</div>
        <h2 className="td-section__title">Logistics</h2>
      </div>
      <div className="td-logistics__grid">
        <div className="td-logistics__card">
          <div className="td-logistics__icon"><BedIcon /></div>
          <h3 className="td-logistics__card-title">Accommodation</h3>
          <p>{accommodation}</p>
        </div>
        <div className="td-logistics__card">
          <div className="td-logistics__icon"><ForkIcon /></div>
          <h3 className="td-logistics__card-title">Meals</h3>
          <p>{meals}</p>
        </div>
        <div className="td-logistics__card">
          <div className="td-logistics__icon"><CarIcon /></div>
          <h3 className="td-logistics__card-title">Transportation</h3>
          <p>{transportation}</p>
        </div>
      </div>
    </section>
  );
}