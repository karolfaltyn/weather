export function getWetherIcon(icon) {
  try {
    let weatherIconByIcon = require(
      `../assets/images/weather-icons/${icon}.svg`,
    );
    return weatherIconByIcon;
  } catch (error) {
    return require(`../assets/images/weather-icons/not-available.svg`).default;
  }
}
