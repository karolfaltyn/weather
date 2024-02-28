export function getHour(dateString) {
  const dateObject = new Date(dateString);

  return dateObject.getHours() + ":00";
}
