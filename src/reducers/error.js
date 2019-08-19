import initialState from '../constants/initialState';
import * as types from '../constants/types';

export function error(state = initialState.error, action) {
    switch (action.type) {
        case types.app.ERROR:
            const { error } = action;
            return error;
        case types.app.ERROR_DELETE:
            return null
        default:
            return state;
    }
}