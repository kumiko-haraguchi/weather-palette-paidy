export function generateCityCountry(city, country) {
  return `${city},${country}`;
}

export function extract7days(lists) {
  return lists.slice(1, 8);
}

export function formatFetchData(props) {
  const { condition, atmosphere, wind, forecast } = props;
  return {
    isFetching: false,
    date: condition.date,
    temp: condition.temp,
    weather: condition.text,
    humidity: atmosphere.humidity,
    speed: wind.speed,
    forecast: extract7days(forecast)
  }
}