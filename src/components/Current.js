import React, { Fragment } from 'react';

const Current = ({ date, temp, weather, humidity, speed }) => {
  return (<Fragment>
    <div>date: {date}</div>
    <div>temp: {temp}</div>
    <div>weather: {weather}</div>
    <div>humidity: {humidity}</div>
    <div>speed: {speed}</div>
    </Fragment>)
}

export default Current;