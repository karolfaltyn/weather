export function getDayOfWeek(timezone) {
    const currentDate = new Date();

    // Adjust the date to the specified time zone offset
    const adjustedDate = new Date(currentDate.getTime() + (timezone));

    // Create a date formatter for the specified locale and options
    const dateFormatter = new Intl.DateTimeFormat('en-US', { weekday: 'long' });

    // Format the adjusted date to get the day of the week
    const dayOfWeek = dateFormatter.format(adjustedDate);

    return dayOfWeek;
}
