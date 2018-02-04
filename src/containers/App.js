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
      temperature: null,
      weather: null,
      humidity: null,
      speed: null,
      forecast: null,
      error: null
    }
    this.fetchWeather = this.fetchWeather.bind(this);
    this.showAnimForRefresh = this.showAnimForRefresh.bind(this);
  }

  async componentDidMount() {
    const { city, country } = cities[0];
    this.setState({ isFetching: true });
    await this.fetchWeather(generateLocationParam(city, country));
  }

  async fetchWeather(location) {
    try {
      const result = await (await fetch(API + addQuery(location))).json();
      const { atmosphere, wind, item } = result.query.results.channel;
      const { condition, forecast } = item;
      const formatted = formatFetchData({ location, condition, atmosphere, wind, forecast });
      this.setState(formatted);
    } catch (err) {
      console.log('fetch error', err)
      this.setState({ error, isFetching: false })
    }
  }

  showAnimForRefresh(){
    this.app.classList.add("fadeOut");
    setTimeout(()=> {
      this.app.classList.remove("fadeOut");
    }, 200)
  }

  renderAppComponent({ isFetching, location, temperature, weather, humidity, speed, forecast }){
    const commonProps = { location, fetchWeather: this.fetchWeather }
    const currentProps = [
      { item: { weather }, unit: null },
      { item: { temperature }, unit: "F" },
      { item: { humidity }, unit: "%" },
      { item: { speed }, unit: "km/h" }
    ]

    if(isFetching) return <Loading />
    return (
      <Fragment>
        <div className="flex vr-center sp-bw">
          <Selector
            {...commonProps}
            cities={cities}
          />
          <Refresh
            {...commonProps}
            showAnimForRefresh={this.showAnimForRefresh}
          />
        </div>
        <Current props={currentProps}/>
        <Forecast forecast={forecast} />
      </Fragment>
    )
  }
  
  render() {
    const { city, error } = this.state;
    if (error) return <p>{error.message}</p>;

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div id="app"
          className={city}
          ref={app => { this.app = app; }}
        >
          <div className="inner">
            {this.renderAppComponent(this.state)}
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;