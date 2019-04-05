import { combineReducers } from 'redux';
import loadedMovies from './movieReducer';

const rootReducer = combineReducers({
  loadedMovies,
})

export default rootReducer;
