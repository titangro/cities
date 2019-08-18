    
import { combineReducers } from 'redux';

import { error } from './error';
import { loading } from './loading';
import { cities, city } from './cities';

const rootReducer = combineReducers({
    loading,
    error,
    cities,
    city
});

export default rootReducer;