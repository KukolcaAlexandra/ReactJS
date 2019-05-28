import { SET_SEARCH_VALUE, SET_SEARCH_BY, SET_SORT_BY } from '../actions/actionTypes';
import searchReducer from './searchReducer';

describe('searchReducer reducer', () => {
  it('should return the initial state', () => {
    expect(searchReducer(undefined, {})).toEqual({
      searchValue: '',
      searchBy: 'title',
      sortBy: 'release_date',
    });
  });

  it('should handle SET_SEARCH_VALUE', () => {
    expect(
      searchReducer({
        searchValue: '',
        searchBy: 'title',
        sortBy: 'release_date',
      }, {
        type: SET_SEARCH_VALUE,
        payload: 'adv',
      }),
    ).toEqual({
      searchValue: 'adv',
      searchBy: 'title',
      sortBy: 'release_date',
    });
  });

  it('should handle SET_SEARCH_BY', () => {
    expect(
      searchReducer({
        searchValue: '',
        searchBy: 'title',
        sortBy: 'release_date',
      }, {
        type: SET_SEARCH_BY,
        payload: 'genres',
      }),
    ).toEqual({
      searchValue: '',
      searchBy: 'genres',
      sortBy: 'release_date',
    });
  });

  it('should handle SET_SORT_BY', () => {
    expect(
      searchReducer({
        searchValue: '',
        searchBy: 'title',
        sortBy: 'release_date',
      }, {
        type: SET_SORT_BY,
        payload: 'vote_average',
      }),
    ).toEqual({
      searchValue: '',
      searchBy: 'title',
      sortBy: 'vote_average',
    });
  });
});
