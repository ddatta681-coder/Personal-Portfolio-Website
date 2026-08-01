import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";

import toursData from "../data/tours.json";
import tourDetailsData from "../data/tourDetails.json";
import useFadeIn from "../hooks/useFadeIn";

import TourDetailHero from "../components/TourDetailHero";
import TourDetailQuickInfo from "../components/TourDetailQuickInfo";
import TourDetailItinerary from "../components/TourDetailItinerary";
import TourDetailLogistics from "../components/TourDetailLogistics";
import TourDetailCarry from "../components/TourDetailCarry";
import TourDetailNotes from "../components/TourDetailNotes";
import TourDetailPdfDownload from "../components/TourDetailPdfDownload";
import TourDetailBooking from "../components/TourDetailBooking";

export default function TourDetail() {
  const { id } = useParams();

  const tour = toursData.tours.find((t) => String(t.id) === String(id));
  const detail = tourDetailsData.tours.find((t) => String(t.id) === String(id));

  useFadeIn();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!tour || !detail) {
    return (
      <main style={{ minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1.5rem" }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, fontSize: "2rem" }}>Tour not found</h1>
        <Link to="/tours" style={{ fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gold)" }}>
          ← Back to Tours
        </Link>
      </main>
    );
  }

  return (
    <main>
      <TourDetailHero tour={tour} />

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2rem" }}>
        <TourDetailQuickInfo tour={tour} />

        {detail.overview && (
          <section className="td-section" style={{ borderBottom: "1px solid rgba(26,22,18,0.07)", padding: "4rem 0" }}>
            <p style={{ fontSize: "1.05rem", fontWeight: 300, color: "var(--ash)", lineHeight: 1.85, maxWidth: "720px", borderLeft: "2px solid var(--gold)", paddingLeft: "1.5rem" }}>
              {detail.overview}
            </p>
          </section>
        )}

        <TourDetailItinerary itinerary={detail.itinerary} />
        <TourDetailLogistics
          accommodation={detail.accommodation}
          meals={detail.meals}
          transportation={detail.transportation}
        />
        <TourDetailCarry items={detail.thingsToCarry} />
        <TourDetailNotes notes={detail.importantNotes} />
        <TourDetailPdfDownload pdfUrl={detail.pdfItinerary} />
        <TourDetailBooking
          price={tour.price}
          seatsAvailable={tour.seatsAvailable}
          seatsTotal={tour.seatsTotal}
          bookingInfo={detail.bookingInfo}
          tourTitle={tour.title}
        />
      </div>
    </main>
  );
}