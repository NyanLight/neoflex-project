export function validateYear(date: Date) {
  const currentDate = new Date();
  const selectedDate = new Date(date);
  return selectedDate < currentDate
    ? null
    : "The value can't be in the future.";
}
