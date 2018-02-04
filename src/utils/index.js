export function generateLocationParam(city, country) {
  return `${city}, ${country}`;
}

export function convertToUpperCase(str) {
  return str.replace(/^[a-z]/g, (val) => {
    return val.toUpperCase();
  });
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

export function extractWeather(weather) {
  const copied = weather.slice(0);
  let extracted = copied.split(" ");
  extracted = extracted.length > 1 ? extracted[1]: extracted[0];
  return extracted;
}

export function formatFetchData({ location, condition, atmosphere, wind, forecast }) {
  return {
    isFetching: false,
    location,
    city: extractCity(location),
    date: condition.date,
    temperature: condition.temp,
    weather: condition.text,
    humidity: atmosphere.humidity,
    speed: wind.speed,
    forecast: extract7days(forecast)
  }
}