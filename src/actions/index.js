import {SEARCH_NEW_CITY, REMOVE_CITY} from './actionTypes';

export const searchNewCity = value => ({
    type: SEARCH_NEW_CITY,
    cityForecast: value
});

export const removeCity = value => ({
    type: REMOVE_CITY,
    cityName: value
});