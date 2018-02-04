import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { generateCityCountry, extract7days, formatFetchData } from '../helper';
import { cities } from '../data/city.json';
import Selector from '../components/Selector';
import Current from '../components/Current';
import Forecast from '../components/Forecast';

const API = `https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="`;
const addQuery = param => param + `")&format=json`;

class App extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      date: null,
      temp: null,
      weather: null,
      humidity: null,
      speed: null,
      forecast: null,
      error: null
    }
    this.fetchWeather = this.fetchWeather.bind(this);
    this.selectCity = this.selectCity.bind(this);
  }

  componentDidMount() {
    const { city, country } = cities[0];
    this.setState({ isFetching: true });
    this.fetchWeather(generateCityCountry(city, country));
  }

  async fetchWeather(cityParam) {
    try {
      const result = await (await fetch(API + addQuery(cityParam))).json()
      const { query: { results: { channel: { atmosphere, wind, item } } } } = result;
      const { condition, forecast } = item;
      const currentData = formatFetchData({ condition, atmosphere, wind, forecast });
      this.setState(currentData);
    } catch (err) {
      console.log('fetch error', err)
      this.setState({ error, isFetching: false })
    }
  }

  selectCity(city) {
    this.setState({ citySelected: city });
    this.fetchWeather(city);
  }

  render() {
    const { isFetching, date, temp, weather, humidity, speed, forecast, error } = this.state;
    if (error) return <p>{error.message}</p>;
    if (isFetching) return <p>Loader</p>
    return (
      <Fragment>  
        <Selector
          cities={cities}
          selectCity={this.selectCity}  
        />  
        <button onClick={this.fetchWeather}>refresh</button>
        <Current
          date={date}
          temp={temp}
          weather={weather}
          humidity={humidity}
          speed={speed}
        />
        <Forecast forecast={forecast} />   
      </Fragment>  
    )
  }
}

export default App;