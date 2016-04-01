
import { FETCH_WEATHER } from "../enums/enums"

// remember reducers are always functions
// first argument is the state for this state this reducer is responsible for
// section argument is the action
export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // not we cannot do return state.push(action.payload.data) since that mutates existing state object
      // concat on the other hand will return a new state object with the old values
      return [ action.payload.data, ...state ]; // [ city, city, city ] NOT [ city, [city, city] ]
      // or return state.concat([action.payload.data])
  }

  return state;
}