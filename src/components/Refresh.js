import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const Refresh = ({ location, fetchWeather }) =>
  <RaisedButton
    label="Refresh"
    default={true}
    className="opa"
    onClick={() => {fetchWeather(location)}}
  />

export default Refresh;