import * as types from '../constants/types';
import { loading, loaded } from './loading';
import { createError, deleteError } from './error';

export const fetchCitiesSuccess = cities => dispatch => {
        dispatch(loaded());
        dispatch({
            type: types.cities.GET,
            cities
        })
    }

export const fetchCitySuccess = city => dispatch => {
    if (city._links['city:urban_area']) {
        const url = city._links['city:urban_area'].href;
        Promise.all(
            [
                fetch(`${url}salaries/`)
                    .then(res => res.json())
                    .then(res => res),
                fetch(`${url}scores/`)
                    .then(res => res.json())
                    .then(res => res),
                fetch(`${url}details/`)
                    .then(res => res.json())
                    .then(res => res),
            ]
        )
            .then(([salaries, scores, details]) => {
                dispatch(loaded());
                dispatch({
                    type: types.cities.SHOW,
                    city,
                    salaries,
                    scores,
                    details
                })
            })
    } else {
        dispatch({
            type: types.cities.SHOW,
            city,
        })
    }
}


export const fetchCities = (url) => {
    return dispatch => {
        dispatch(loading());
        fetch(url)
            .then(res => res.json())
            .then(
                cities => {
                    if (cities.count) {
                        dispatch(deleteError());
                        dispatch(
                            fetchCitiesSuccess(cities._embedded['city:search-results']
                        ))
                    } else {
                        dispatch(createError('По данному запросу не найден ни 1 город'))
                    }
                },
                err => dispatch(createError(err))
            ) 
    }           
}

export const fetchCity = (url) => {
    return dispatch => {
        dispatch(loading());
        fetch(url)
            .then(res => res.json())
            .then(
                data => dispatch(fetchCitySuccess(data)),
                err => dispatch(createError(err))
            ) 
    }           
}

