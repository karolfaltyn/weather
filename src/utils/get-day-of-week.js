export function getDayOfWeek(dateString) {
  const dateObject = new Date(dateString);

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const dayIndex = dateObject.getDay();

  return daysOfWeek[dayIndex];
}
