/**
 * Determine pipeline stage based on form data.
 * @param appointmentDate string (yyyy-mm-dd) – empty string means no appointment
 * @param revenueRange string – one of the revenue options
 */
export function getStage(appointmentDate: string, revenueRange: string): string {
  if (revenueRange === "Above 1M") return "qualified";
  if (appointmentDate) return "appointment";
  return "lead";
}

/** Convert date & time strings into a single ISO timestamp */
export function formatAppointment(date: string, time: string): string | null {
  if (!date || !time) return null;
  // time is expected as HH:mm (24h)
  const iso = new Date(`${date}T${time}:00`).toISOString();
  return iso;
}

/** Validate that a chosen date is within the next 5 days and time is between 08:00‑21:00 */
export function isBookingValid(date: string, time: string): boolean {
  if (!date || !time) return false;
  const selected = new Date(`${date}T${time}:00`);
  const now = new Date();
  const max = new Date();
  max.setDate(now.getDate() + 5);
  const hour = selected.getHours();
  return selected >= now && selected <= max && hour >= 8 && hour < 21;
}
