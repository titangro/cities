import * as types from '../constants/types';

export const createError = (error, info) => {
    return dispatch => 
        dispatch({
            type: types.app.ERROR,
            error,
            info
        })    
}

export const deleteError = () => {
    return dispatch => 
        dispatch({
            type: types.app.ERROR_DELETE
        })    
}