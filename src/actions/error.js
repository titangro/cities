import * as types from '../constants/types';

export const createError = (error) => {
    return dispatch => 
        dispatch({
            type: types.app.ERROR,
            error
        })    
}

export const deleteError = () => dispatch =>
    dispatch({
        type: types.app.ERROR_DELETE
    })