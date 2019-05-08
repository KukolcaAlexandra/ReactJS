import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import {
  moviesReducer,
  moviesSaga,
} from './movies';

import searchParams from './searchReducer';

function* rootSaga() {
  yield all([
    moviesSaga(),
  ]);
}

const rootReducer = combineReducers({
  movies: moviesReducer,
  searchParams,
});

export {
  rootReducer,
  rootSaga,
};
