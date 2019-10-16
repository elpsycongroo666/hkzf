import {MAP_CITY_NAME_SET  } from "../actionTypes";

const defaultState = {
  cityName: ""
}

export default (state = defaultState, action) => { 
  let newState=JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case MAP_CITY_NAME_SET:
      newState.cityName=action.value;
      break;
    default:
      break;
  }
  return newState;
}