import { AlertIcon } from "./TourDetailIcons";
import "./styles/TourDetailNotes.css";

export default function TourDetailNotes({ notes }) {
  return (
    <section className="td-section td-notes fade-up">
      <div className="td-section__header">
        <div className="section-label">Before You Book</div>
        <h2 className="td-section__title">Important Notes</h2>
      </div>
      <div className="td-notes__inner">
        <div className="td-notes__alert-icon"><AlertIcon /></div>
        <ul className="td-notes__list">
          {notes.map((note, i) => (
            <li key={i} className="td-notes__item">{note}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}