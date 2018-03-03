import React from 'react';

const renderForcastItem = list => {
  return list.map(({ date, day, high, low, text }, idx) => {
    return <li key={idx}>
      {date}, {day}, {high}, {low}, {text}
    </li>
    })
}

const Forecast = ({ forecast }) => {
  if (!forecast) return null;
  return <ul>{ renderForcastItem(forecast) }</ul>
}

export default Forecast;