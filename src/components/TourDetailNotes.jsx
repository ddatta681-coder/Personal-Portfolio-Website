import { AlertIcon } from "./TourDetailIcons";
import "./styles/TourDetailNotes.css";

export default function TourDetailNotes({ notes }) {
  return (
    <section className="td-section td-notes fade-up">
      <div className="td-section__header">
        <div className="section-label">Before You Book</div>
        <h2 className="td-section__title">Important Notes</h2>
      </div>
      <div className="td-notes__grid">
        {notes.map((note, i) => (
          <div key={i} className="td-notes__card">
            <div className="td-notes__card-icon"><AlertIcon /></div>
            <p className="td-notes__card-text">{note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}