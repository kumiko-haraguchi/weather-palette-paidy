import React from 'react';

import { generateCityCountry } from '../helper';

const generateOptions = ({ id, city, country }) =>
  <option key={id} value={generateCityCountry(city, country)}>{city}</option>

const Selector = ({ selectCity, cities }) =>
  <select
    onChange={e => { selectCity(e.target.value) }}>
    { cities.map(city => generateOptions(city))}
  </select>

export default Selector;