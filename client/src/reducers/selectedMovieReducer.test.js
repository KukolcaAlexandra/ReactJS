import { LOAD_MOVIE_BY_ID_SUCCESS, RESET_SELECTED_MOVIE } from '../actions/actionTypes';
import selectedMovieReducer from './selectedMovieReducer';

describe('selectedMovieReducer reducer', () => {

  it('should return the initial state', () => {
    expect(selectedMovieReducer(undefined, {})).toEqual(
      {
        data: null,
      }
    )
  })

  it('should handle LOAD_MOVIE_BY_ID_SUCCESS', () => {
    expect(
      selectedMovieReducer({
        data: null,
      }, { 
        type: LOAD_MOVIE_BY_ID_SUCCESS,
        payload: {
          id: 447365, 
          title: "Guardians of the Galaxy Vol. 3", 
          tagline: "", 
          vote_average: 0, 
          vote_count: 9,
          genres: ['drama']
        }
      })
    ).toEqual({
      data: {
        id: 447365, 
          title: "Guardians of the Galaxy Vol. 3", 
          tagline: "", 
          vote_average: 0, 
          vote_count: 9,
          genres: ['drama']
      }
    })
  })

  it('should handle RESET_SELECTED_MOVIE', () => {
    expect(
      selectedMovieReducer({
        data: {
          id: 447365, 
            title: "Guardians of the Galaxy Vol. 3", 
            tagline: "", 
            vote_average: 0, 
            vote_count: 9,
            genres: ['drama']
        }
      }, { type: RESET_SELECTED_MOVIE })
    ).toEqual({
      data: null
    })
  })

})
