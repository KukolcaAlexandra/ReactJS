import { getMovies, getMovieById } from '../api/api-requests';
import { 
	LOAD_MOVIES_SUCCESS,
	LOAD_MOVIES_ERROR,
	LOAD_MOVIE_BY_ID_SUCCESS,
} from './actionTypes';
import { resetOffset } from './offsetActions';
import { genre, apiParams } from '../consts';

export function loadMoviesSuccess(movies) {
	console.log('loadMoviesSuccess');
  return {type: LOAD_MOVIES_SUCCESS, payload: movies};
}

export function loadMoviesError(error) {
	console.log('loadMoviesError');
  return {type: LOAD_MOVIES_ERROR, error};
}

export function loadSearchedMovies(searchValueParam, searchByParam) {
	console.log('loadSearchedMovies');
  return function(dispatch, getState) {
		dispatch(resetOffset());
		const store = getState();
		const searchValue = searchValueParam || store.searchParams.searchValue;
		const	searchBy = searchByParam || store.searchParams.searchBy;
		const sortBy = store.searchParams.sortBy;
		const offset = store.loadedMovies.offset
		return getMovies(searchValue, searchBy, sortBy, offset)
			.then(movies => {
					dispatch(loadMoviesSuccess(movies))
				}, error => {
					dispatch(loadMoviesError(error));
				}
		);
  };
}

export function loadMovieByIdSuccess(data) {
	console.log('loadSelectedMovieSuccess');
  return {type: LOAD_MOVIE_BY_ID_SUCCESS, payload: data};
}

export function loadMovieById(id) {
	console.log('loadMovieById');
  return function(dispatch) {
		return getMovieById(id)
			.then(data => {
					dispatch(loadMovieByIdSuccess(data));
					const searchValue = data.genres[0];
					const searchBy = apiParams[genre];
					dispatch(loadSearchedMovies(searchValue, searchBy));
				}, error => {
					dispatch(loadMoviesError(error));
				}
		);
  };
}
