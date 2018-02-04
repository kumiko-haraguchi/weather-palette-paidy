import React from 'react';

import { extractWeather } from '../utils';

const iconsDic = {
  "Sunny": "icon-sun-inv",
  "Breezy": "icon-sun-inv",
  "clear": "icon-sun-inv",
  "Cloudy": "icon-cloud-inv",
  "Rainny": "icon-rain-inv",
  "Thunder": "icon-cloud-flash-inv"
}

const Icon = ({ weather }) => {
  if(!weather) return null;
  const iconClass = iconsDic[extractWeather(weather)]
    ? iconsDic[extractWeather(weather)]
    : "icon-sun-inv";
  return <i className={`icon-l ${iconClass}`} />
}

export default Icon;