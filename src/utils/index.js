export function generateLocationParam(city, country) {
  return `${city}, ${country}`;
}

export function extract7days(lists) {
  return lists.slice(1, 6);
}

export function extractCity(location) {
  const copied = location.slice(0);
  const extracted = copied.split(",")[0];
  const trimmed = extracted.replace(/\s+/g, "");
  return trimmed.toLowerCase();
}

export function formatFetchData({ location, condition, atmosphere, wind, forecast }) {
  return {
    isFetching: false,
    location,
    city: extractCity(location),
    date: condition.date,
    temp: condition.temp,
    weather: condition.text,
    humidity: atmosphere.humidity,
    speed: wind.speed,
    forecast: extract7days(forecast)
  }
}