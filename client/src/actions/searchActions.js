import { SET_SEARCH_VALUE, SET_SEARCH_BY, SET_SORT_BY } from './actionTypes';
import { apiParams } from '../consts';

export function setSearchValue(searchValue) {
	console.log('setSEarchValue');
  return {
    type: SET_SEARCH_VALUE, 
    payload: searchValue
  };
}

export function setSearchBy(searchBy) {
  console.log('setSearchBy');
  return {
    type: SET_SEARCH_BY, 
    payload: apiParams[searchBy]
  };
}

export function setSortBy(sortBy) {
  console.log('setSortBy');
  return {
    type: SET_SORT_BY, 
    payload: apiParams[sortBy]
  };
}