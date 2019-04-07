import { LOAD_MORE_SUCCESS } from './actionTypes';
import { getMovies } from '../api/api-requests';

export function loadMoreSuccess(movies) {
	console.log('loadMoviesSuccess');
  return {type: LOAD_MORE_SUCCESS, payload: movies};
}

export function loadMore() {
	console.log('loadMore');
  return function(dispatch, getState) {
		const store = getState();
		const searchValue = store.searchParams.searchValue;
		const searchBy = store.searchParams.searchBy;
		const sortBy = store.searchParams.sortBy;
		const offset = store.loadedMovies.offset
		return getMovies(searchValue, searchBy, sortBy, offset)
			.then(movies => {
					dispatch(loadMoreSuccess(movies))
				}, error => {
					dispatch(loadMoviesError(error));
			  }
		);
  }; 
}
