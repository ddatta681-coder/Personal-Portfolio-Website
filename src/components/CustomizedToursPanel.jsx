import customizedToursData from "../data/customizedTours.json";
import "./styles/CustomizedToursPanel.css";

const { customizedTours, premiumDepartures } = customizedToursData;

export default function CustomizedToursPanel() {
  return (
    <section className="custom-panel">
      <div className="custom-panel__inner">
        <div className="custom-panel__header">
          <span className="section-label">By Request</span>
          <h2 className="custom-panel__title">
            Customised Tours &amp; Premium Departures
          </h2>
          <p className="custom-panel__sub">
            Bespoke wildlife journeys crafted around your schedule and
            aspirations — reach out to plan yours.
          </p>
        </div>

        <div className="custom-panel__grid">
          {/* Customised Tours */}
          <div className="custom-panel__col">
            <h3 className="custom-panel__col-heading">Customised Tours</h3>
            <ul className="custom-panel__list">
              {customizedTours.map((tour) => (
                <li key={tour.id} className="custom-panel__item">
                  <span className="custom-panel__diamond">◆</span>
                  {tour.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Premium Departures */}
          <div className="custom-panel__col">
            <h3 className="custom-panel__col-heading">
              Premium Customised Departures
            </h3>
            <ul className="custom-panel__list">
              {premiumDepartures.map((dep) => (
                <li key={dep.id} className="custom-panel__item custom-panel__item--premium">
                  <span className="custom-panel__diamond">◆</span>
                  <div>
                    <strong className="custom-panel__dep-title">
                      {dep.title}
                    </strong>
                    <span className="custom-panel__dep-subtitle">
                      {dep.subtitle}
                    </span>
                    {dep.routes.length > 0 && (
                      <ul className="custom-panel__routes">
                        {dep.routes.map((r) => (
                          <li key={r.label}>
                            <span className="custom-panel__route-label">
                              {r.label}
                            </span>
                            {r.description}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}