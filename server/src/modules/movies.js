import { call, put, all, takeLatest, select } from 'redux-saga/effects';
import { INCREASE_OFFSET, RESET_OFFSET, RESET_SELECTED_MOVIE } from '../actions/actionTypes';

// Selectors
export const getSearchValue = state => state.searchParams.searchValue;
export const getSearchBy = (state) => state.searchParams.searchBy;
export const getSortBy = (state) => state.searchParams.sortBy;
export const getOffset = (state) => state.movies.offset;
export const getMoviesList = (state) => state.movies.moviesList;

// Actions
const FETCH_MOVIES = 'movies/FETCH';
const UPDATE = 'movies/UPDATE';
const FETCH_MOVIE_BY_ID = 'movies/FETCH_BY_ID';
const UPDATE_CURRENT_MOVIE = 'movies/UPDATE_CURRENT_MOVIE';
const FETCH_LOAD_MORE_MOVIES = 'movies/FETCH_LOAD_MORE';
const UPDATE_LOAD_MORE_MOVIES = 'movies/UPDATE_LOAD_MORE_MOVIES';

// Action Creators
export const fetchMovies = () => ({
	type: FETCH_MOVIES,
});

export const fetchMovieById = id => ({
  type: FETCH_MOVIE_BY_ID,
  payload: id,
});

export const fetchLoadMore = () => ({
  type: FETCH_LOAD_MORE_MOVIES,
});

export const updateMovies = movies => ({
  type: UPDATE,
  payload: movies,
});

export const updateCurrentMovie = movie => ({
  type: UPDATE_CURRENT_MOVIE,
  payload: movie,
});

export const updateLoadMoreMovies = movies => ({
  type: UPDATE_LOAD_MORE_MOVIES,
  payload: movies,
});

// Sagas
export function* fetchMoviesAsync() {
	const searchValue = yield select(getSearchValue);
	const searchBy = yield select(getSearchBy);
	const sortBy = yield select(getSortBy);
	const offset = yield select(getOffset);
	const url = `https://reactjs-cdp.herokuapp.com/movies?sortBy=${sortBy}&sortOrder=desc&search=${searchValue}&searchBy=${searchBy}&offset=${offset}&limit=9`;
  const response = yield call(fetch, url);
  const movies = yield response.json();

  yield put(updateMovies(movies));
}

export function* watchFetchMovies() {
  yield takeLatest(FETCH_MOVIES, fetchMoviesAsync);
}

export function* fetchMovieByIdAsync(action) {
	const response = yield call(fetch, `https://reactjs-cdp.herokuapp.com/movies/${action.payload}`);
  const movie = yield response.json();

  yield put(updateCurrentMovie(movie));
}

export function* watchFetchMovieById() {
  yield takeLatest(FETCH_MOVIE_BY_ID, fetchMovieByIdAsync);
}

export function* fetchLoadMoreMoviesAsync() {
	const searchValue = yield select(getSearchValue);
	const searchBy = yield select(getSearchBy);
	const sortBy = yield select(getSortBy);
	const offset = yield select(getOffset);
	const url = `https://reactjs-cdp.herokuapp.com/movies?sortBy=${sortBy}&sortOrder=desc&search=${searchValue}&searchBy=${searchBy}&offset=${offset}&limit=9`;
  const response = yield call(fetch, url);
  const movies = yield response.json();

  yield put(updateLoadMoreMovies(movies));
}

export function* watchFetchLoadMoreMovies() {
  yield takeLatest(FETCH_LOAD_MORE_MOVIES, fetchLoadMoreMoviesAsync);
}

// Movie Saga
export function* moviesSaga() {
	yield all([
		watchFetchMovies(),
		watchFetchMovieById(),
		watchFetchLoadMoreMovies(),
	]);
}

// Initial state
const INITIAL_STATE = {
  loading: false,
	items: [],
	moviesList: [],
	total: 0,
	offset: 0,
	selectedMovie: null
};

// Reducer
export const moviesReducer = (state = INITIAL_STATE, action = {}) => {
	switch (action.type) {
		case FETCH_MOVIES:
		case FETCH_MOVIE_BY_ID:
		case FETCH_LOAD_MORE_MOVIES:
			return {
				...state,
				loading: true,
			};
		case UPDATE:
      return {
        ...state,
        loading: false,
				moviesList: action.payload.data,
				total: action.payload.total,
				offset: action.payload.offset
			};
		case UPDATE_CURRENT_MOVIE:
      return {
        ...state,
        loading: false,
        selectedMovie: action.payload,
			};
			
		case UPDATE_LOAD_MORE_MOVIES:
			return {
				...state,
				loading: false,
				moviesList: [...state.moviesList, ...action.payload.data]
			};
		
		case INCREASE_OFFSET:
			return {
				...state,
				offset: state.offset + 9
			};

		case RESET_OFFSET:
			return {
				...state,
				offset: 0
			};
		
		case RESET_SELECTED_MOVIE:
			return {
				...state,
				selectedMovie: null
			};

		default:
			return state;
  }
}
  