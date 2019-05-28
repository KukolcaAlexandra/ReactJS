import { createSelector } from 'reselect';

// selector
const getMoviesList = state => state.loadedMovies.moviesList;

// reselect function
const moviesListSelector = createSelector(
  getMoviesList,
  movieslist => movieslist,
);

export default moviesListSelector;
