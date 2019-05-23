import { createSelector } from 'reselect';

// selector
const getMoviesList = (state) => state.loadedMovies.moviesList

// reselect function
export const moviesListSelector = createSelector (
    [ getMoviesList ],
    (movieslist) => movieslist
);
