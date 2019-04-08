import { RESET_SELECTED_MOVIE }  from './actionTypes';
import { resetSelectedMovie } from './selectedMovieActions';

describe('reset selected movie actions', () => {
  it('resetSelectedMovie should create RESET_SELECTED_MOVIE action', () => {
    expect(resetSelectedMovie()).toEqual({
      type: RESET_SELECTED_MOVIE
    })
  })
})
