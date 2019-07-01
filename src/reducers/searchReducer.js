import { SEARCH_NEW_CITY, REMOVE_CITY } from '../actions/actionTypes';

const initialState = {
  citysToCard: []
};

export const searchReducer = (state = initialState, action) => {
  let listCitys = [];

  switch (action.type) {
    case SEARCH_NEW_CITY:

      for (let cityForecast of state.citysToCard) {
        
        if(cityForecast.cityName === action.cityForecast.cityName){
          return {
            ...state
          }
        }

        listCitys.push(cityForecast);
      }

      listCitys.push(action.cityForecast);

      return {
        ...state,
        citysToCard: listCitys
      }
    case REMOVE_CITY:

      let cityToRemove = action.cityName.toLowerCase();

      for (let cityForecast of state.citysToCard) {
        if (cityForecast.cityName !== cityToRemove) {
          listCitys.push(cityForecast);
        }
      }

      return {
        ...state,
        citysToCard: listCitys
      };
    default:
      return state;
  }
};