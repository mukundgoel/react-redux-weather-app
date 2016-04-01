import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';

/*

Data structure of weather state is:

weather: [
  city: { name: "San Francisco" },
  list: [
    { main: { temp: 260, humidity: 40, pressure: 40 }},
    { main: { temp: 260, humidity: 40, pressure: 40 }},
    { main: { temp: 260, humidity: 40, pressure: 40 }},
    { main: { temp: 260, humidity: 40, pressure: 40 }}
  ]
 */

const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;
