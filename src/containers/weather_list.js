import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
    );
  }
}
/*
function mapStateToProps(state) {
  // we are using state.weather here because we assigned
  // WeatherReducer to the weather key in combineReducers
  return { weather: state.weather }
}

this is equivalent to the function below:

*/

function mapStateToProps({ weather }) {
  // we are using state.weather here because we assigned
  // WeatherReducer to the weather key in combineReducers
  return { weather }
}

export default connect(mapStateToProps)(WeatherList);
