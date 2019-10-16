
import {MAP_CITY_NAME_SET  } from "../actionTypes";


/**
 * 设置城市的名称
 * @param {String} cityName 城市的名称
 */
export const mapCityName=(cityName)=>{
  return {
    type:MAP_CITY_NAME_SET,
    value:cityName
  }
}