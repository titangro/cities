import initialState from '../constants/initialState';
import * as types from '../constants/types';

export function cities(state = initialState.cities, action) {
    switch (action.type) {
        case types.cities.GET:
            const { cities } = action;
            return cities;
        default:
            return state;
    }
}

export function city(state = initialState.city, action) {
    switch (action.type) {
        case types.cities.SHOW:
            const { city } = action;
            return city;
        default:
            return state;
    }
}