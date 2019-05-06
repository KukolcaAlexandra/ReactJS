import { combineReducers } from 'redux';
import loadedMovies from './movieReducer';
import searchParams from './searchReducer';
import selectedMovie from './selectedMovieReducer';

const rootReducer = combineReducers({
  loadedMovies,
  searchParams,
  selectedMovie
})

export default rootReducer;
