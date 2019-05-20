import { SET_SEARCH_VALUE, SET_SEARCH_BY, SET_SORT_BY } from '../actions/actionTypes';
import { title, releaseDate, apiParams } from '../consts';

const initialState = {
  searchValue: '',
  searchBy: title,
  sortBy: apiParams[releaseDate],
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SEARCH_VALUE:
      return { ...state, searchValue: action.payload };

    case SET_SEARCH_BY:
      return { ...state, searchBy: action.payload };

    case SET_SORT_BY:
      return { ...state, sortBy: action.payload };

    default:
      return state;
  }
}
