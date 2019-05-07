import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import {
  usersReduces,
  usersSaga,
} from './users';

import {
  moviesReducer,
  moviesSaga,
} from './movies';

import loadedMovies from './movieReducer';
import searchParams from './searchReducer';
import selectedMovie from './selectedMovieReducer';

function* rootSaga(getState) {
  yield all([
    usersSaga(),
    moviesSaga(getState),
  ]);
}

const rootReducer = combineReducers({
  users: usersReduces,
  movies: moviesReducer,
  loadedMovies,
  searchParams,
  selectedMovie
});

export {
  rootReducer,
  rootSaga,
};
