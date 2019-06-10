import { LOAD_MORE_SUCCESS } from './actionTypes';
import { getMovies } from '../../api/api-requests';

export function loadMoreSuccess(movies) {
  return { type: LOAD_MORE_SUCCESS, payload: movies };
}

export function loadMore() {
  return function (dispatch, getState) {
    const store = getState();
    const { searchValue } = store.searchParams;
    const { searchBy } = store.searchParams;
    const { sortBy } = store.searchParams;
    const { offset } = store.loadedMovies;
    return getMovies(searchValue, searchBy, sortBy, offset)
      .then((movies) => {
        dispatch(loadMoreSuccess(movies));
      }, (error) => {
        console.log(error);
      });
  };
}
