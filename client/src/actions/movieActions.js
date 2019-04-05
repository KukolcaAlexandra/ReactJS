import { getMovies } from '../api/api-requests';
import { LOAD_MOVIES_SUCCESS, LOAD_MOVIES_ERROR } from './actionTypes';

export function loadMoviesSuccess(movies) {
	console.log('loadMoviesSuccess');
	console.log(movies);
  return {type: LOAD_MOVIES_SUCCESS, payload: movies};
}

export function loadMoviesError(error) {
	console.log('loadMoviesError');
  return {type: LOAD_MOVIES_ERROR, error};
}

export function loadSearchedMovies(searchValue, searchBy) {
	//console.log('loadMovies');
	const sortBy = 'release_date';
  return function(dispatch) {
		return getMovies(searchValue, searchBy, sortBy)
			.then(movies => {
					dispatch(loadMoviesSuccess(movies))
				}, error => {
					dispatch(loadMoviesError(error));
      	//throw(error);
    	});
  };
}

