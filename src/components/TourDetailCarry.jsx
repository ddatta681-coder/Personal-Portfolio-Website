import { BagIcon } from "./TourDetailIcons";
import "./styles/TourDetailCarry.css";

export default function TourDetailCarry({ items }) {
  return (
    <section className="td-section td-carry fade-up">
      <div className="td-section__header">
        <div className="section-label">Packing Guide</div>
        <h2 className="td-section__title">Things to Carry</h2>
      </div>
      <div className="td-carry__icon-accent"><BagIcon /></div>
      <ul className="td-carry__list">
        {items.map((item, i) => (
          <li key={i} className="td-carry__item">
            <span className="td-carry__dot" />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}