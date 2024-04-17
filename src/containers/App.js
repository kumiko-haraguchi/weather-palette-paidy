import React, { Component, Fragment } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import { generateLocationParam, formatFetchData } from '../utils';
import { cities } from '../data/city.json';
import Selector from '../components/Selector';
import Current from '../components/Current';
import Forecast from '../components/Forecast';
import Refresh from '../components/Refresh';
import Loading from '../components/Loading';
import './App.scss';

const API = `https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="`;
const addQuery = param => param + `")&format=json`;

class App extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      location: null,
      city: null,
      date: null,
      temp: null,
      weather: null,
      humidity: null,
      speed: null,
      forecast: null,
      error: null
    }
    this.fetchWeather = this.fetchWeather.bind(this);
  }

  componentDidMount() {
    const { city, country } = cities[0];
    this.setState({ isFetching: true });
    this.fetchWeather(generateLocationParam(city, country));
  }

  async fetchWeather(location) {
    try {
      const result = await (await fetch(API + addQuery(location))).json()
      const { atmosphere, wind, item } = result.query.results.channel;
      const { condition, forecast } = item;
      const formatted = formatFetchData({ location, condition, atmosphere, wind, forecast });
      this.setState(formatted);
    } catch (err) {
      console.log('fetch error', err)
      this.setState({ error, isFetching: false })
    }
  }

  render() {
    const { isFetching, location, city, date, temp, weather, humidity, speed, forecast, error } = this.state;
    const commonProps = { location, fetchWeather: this.fetchWeather }
    if (error) return <p>{error.message}</p>;

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div id="app" className={city}>
          <div className="inner">
            {isFetching
              ? <Loading />
              : <Fragment>  
                <div className="flex vr-center sp-bw">  
                  <Selector
                    {...commonProps}
                    cities={cities}
                  />  
                  <Refresh {...commonProps} />
                </div> 
                <Current
                  date={date}
                  temp={temp}
                  weather={weather}
                  humidity={humidity}
                  speed={speed}
                />
                <Forecast forecast={forecast} />
              </Fragment>  
            }    
          </div> 
        </div> 
      </MuiThemeProvider>  
    )
  }
}

export default App;