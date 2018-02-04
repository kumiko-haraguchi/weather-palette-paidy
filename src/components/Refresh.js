import React, { Component } from 'react';

const handleClick = (e, { location, fetchWeather, showAnimForRefresh })=> {
  e.stopPropagation;
  fetchWeather(location);
  showAnimForRefresh();
}

const Refresh = props =>
  <button
    className="btn-refresh"
    onClick={e => handleClick(e, props)}>
    <i className={`icon-s icon-arrows-cw`}/>
  </button>

export default Refresh;