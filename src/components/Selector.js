import React from 'react';

import { generateLocationParam } from '../utils';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const generateOptions = options =>
  options.map(({ id, city, country }) => {
    const location = generateLocationParam(city, country);
    return <MenuItem key={id} primaryText={location} value={location} />;
  });
  
const Selector = ({ location, cities, fetchWeather }) =>
  <SelectField
    value={location}
    onChange={(e, index, value) => { fetchWeather(value) }} className="mui-select"
  >
    {generateOptions(cities)}
  </SelectField> 

export default Selector;