import * as types from '../constants/types';

export const getCities = (cities) => {
    return dispatch => 
        dispatch({
            type: types.cities.GET,
            cities
        })    
}

export const showCity = (city) => {
    return dispatch => 
        dispatch({
            type: types.cities.SHOW,
            city
        })    
}