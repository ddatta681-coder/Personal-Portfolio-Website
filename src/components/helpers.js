export function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function getStatus(tour) {
  const ratio = tour.seatsAvailable / tour.seatsTotal;
  if (ratio === 0) return { label: "Fully Booked", cls: "status--full" };
  if (ratio <= 0.2) return { label: "Filling Fast", cls: "status--urgent" };
  if (ratio <= 0.5) return { label: "Limited Seats", cls: "status--limited" };
  return { label: "Available", cls: "status--open" };
}