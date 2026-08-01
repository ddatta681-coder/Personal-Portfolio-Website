import { DownloadIcon } from "./TourDetailIcons";
import "./styles/TourDetailPdfDownload.css";

export default function TourDetailPdfDownload({ pdfUrl }) {
  return (
    <section className="td-section td-pdf fade-up">
      <div className="td-pdf__inner">
        <div className="td-pdf__text">
          <div className="section-label">Detailed Itinerary</div>
          <h2 className="td-pdf__title">Download the Full Programme</h2>
          <p className="td-pdf__sub">
            A complete day-by-day breakdown with timings, gear recommendations,
            and photography tips — formatted for offline reference.
          </p>
        </div>
        <a
          href={pdfUrl}
          download
          className="td-pdf__btn"
          target="_blank"
          rel="noreferrer"
        >
          <DownloadIcon />
          Download PDF
        </a>
      </div>
    </section>
  );
}