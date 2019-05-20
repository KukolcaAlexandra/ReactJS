import { SET_SEARCH_VALUE, SET_SEARCH_BY, SET_SORT_BY } from './actionTypes';
import { setSearchValue, setSearchBy, setSortBy } from './searchActions';

describe('search actions', () => {
  it('setSearchValue should create SET_SEARCH_VALUE action', () => {
    expect(setSearchValue('world')).toEqual({
      type: SET_SEARCH_VALUE,
      payload: 'world',
    });
  });

  it('setSearchBy should create SET_SEARCH_BY action', () => {
    expect(setSearchBy('genre')).toEqual({
      type: SET_SEARCH_BY,
      payload: 'genres',
    });
  });

  it('setSortBy should create SET_SORT_BY action', () => {
    expect(setSortBy('release date')).toEqual({
      type: SET_SORT_BY,
      payload: 'release_date',
    });
  });
});
