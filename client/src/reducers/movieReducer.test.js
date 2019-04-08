import movieReducer from './movieReducer';
import { 
  LOAD_MOVIES_SUCCESS, 
  INCREASE_OFFSET, 
  RESET_OFFSET, 
  LOAD_MORE_SUCCESS
} from '../actions/actionTypes';

describe('movieReducer reducer', () => {
  it('should return the initial state', () => {
    expect(movieReducer(undefined, {})).toEqual(
      {
        moviesList: [],
        total: 0,
        offset: 0,
      }
    )
  })

  it('should handle LOAD_MOVIES_SUCCESS', () => {
    expect(
      movieReducer({}, {
        type: LOAD_MOVIES_SUCCESS,
        payload: {
          data: [
            {id: 447365, title: "Guardians of the Galaxy Vol. 3", tagline: "", vote_average: 0, vote_count: 9},
            {id: 299534, title: "Untitled Avengers", tagline: "", vote_average: 0, vote_count: 9},
            {id: 320288, title: "X-Men: Dark Phoenix", tagline: "", vote_average: 0, vote_count: 0},
            {id: 351286, title: "Jurassic World: Fallen Kingdom", tagline: "Life finds a way", vote_average: 0},
            {id: 383498, title: "Deadpool 2", tagline: "Prepare for the Second Coming.", vote_average: 0},
            {id: 460019, title: "Truth or Dare", tagline: "", vote_average: 0, vote_count: 0},
            {id: 497802, title: "Pandas", tagline: "WILD AT HEART", vote_average: 0, vote_count: 0},
            {id: 443009, title: "Don’t Worry, He Won’t Get Far on Foot", tagline: "", vote_average: 0},
            {id: 424585, title: "Mademoiselle Paradis", tagline: "", vote_average: 6, vote_count: 2},
          ],
          offset: 0,
          total: 1136
        }
      })
    ).toEqual({
      moviesList: [
        {id: 447365, title: "Guardians of the Galaxy Vol. 3", tagline: "", vote_average: 0, vote_count: 9},
        {id: 299534, title: "Untitled Avengers", tagline: "", vote_average: 0, vote_count: 9},
        {id: 320288, title: "X-Men: Dark Phoenix", tagline: "", vote_average: 0, vote_count: 0},
        {id: 351286, title: "Jurassic World: Fallen Kingdom", tagline: "Life finds a way", vote_average: 0},
        {id: 383498, title: "Deadpool 2", tagline: "Prepare for the Second Coming.", vote_average: 0},
        {id: 460019, title: "Truth or Dare", tagline: "", vote_average: 0, vote_count: 0},
        {id: 497802, title: "Pandas", tagline: "WILD AT HEART", vote_average: 0, vote_count: 0},
        {id: 443009, title: "Don’t Worry, He Won’t Get Far on Foot", tagline: "", vote_average: 0},
        {id: 424585, title: "Mademoiselle Paradis", tagline: "", vote_average: 6, vote_count: 2},
      ],
      offset: 0,
      total: 1136
    })
  })


  it('should handle LOAD_MORE_SUCCESS', () => {
    expect(
      movieReducer({
        moviesList: [
          {id: 447365, title: "Guardians of the Galaxy Vol. 3", tagline: "", vote_average: 0, vote_count: 9},
          {id: 299534, title: "Untitled Avengers", tagline: "", vote_average: 0, vote_count: 9},
          {id: 320288, title: "X-Men: Dark Phoenix", tagline: "", vote_average: 0, vote_count: 0},
          {id: 351286, title: "Jurassic World: Fallen Kingdom", tagline: "Life finds a way", vote_average: 0},
          {id: 383498, title: "Deadpool 2", tagline: "Prepare for the Second Coming.", vote_average: 0},
          {id: 460019, title: "Truth or Dare", tagline: "", vote_average: 0, vote_count: 0},
          {id: 497802, title: "Pandas", tagline: "WILD AT HEART", vote_average: 0, vote_count: 0},
          {id: 443009, title: "Don’t Worry, He Won’t Get Far on Foot", tagline: "", vote_average: 0},
          {id: 424585, title: "Mademoiselle Paradis", tagline: "", vote_average: 6, vote_count: 2},
        ],
        offset: 0,
        total: 1136
      }, {
        type: LOAD_MORE_SUCCESS,
        payload: {
          data: [
            {id: 447365, title: "Guardians of the Galaxy Vol. 3", tagline: "", vote_average: 0, vote_count: 9},
            {id: 299534, title: "Untitled Avengers", tagline: "", vote_average: 0, vote_count: 9},
            {id: 320288, title: "X-Men: Dark Phoenix", tagline: "", vote_average: 0, vote_count: 0},
            {id: 351286, title: "Jurassic World: Fallen Kingdom", tagline: "Life finds a way", vote_average: 0},
            {id: 383498, title: "Deadpool 2", tagline: "Prepare for the Second Coming.", vote_average: 0},
            {id: 460019, title: "Truth or Dare", tagline: "", vote_average: 0, vote_count: 0},
            {id: 497802, title: "Pandas", tagline: "WILD AT HEART", vote_average: 0, vote_count: 0},
            {id: 443009, title: "Don’t Worry, He Won’t Get Far on Foot", tagline: "", vote_average: 0},
            {id: 424585, title: "Mademoiselle Paradis", tagline: "", vote_average: 6, vote_count: 2},
          ],
          offset: 1,
          total: 1136
        }
      })
    ).toEqual({
      moviesList: [
        {id: 447365, title: "Guardians of the Galaxy Vol. 3", tagline: "", vote_average: 0, vote_count: 9},
        {id: 299534, title: "Untitled Avengers", tagline: "", vote_average: 0, vote_count: 9},
        {id: 320288, title: "X-Men: Dark Phoenix", tagline: "", vote_average: 0, vote_count: 0},
        {id: 351286, title: "Jurassic World: Fallen Kingdom", tagline: "Life finds a way", vote_average: 0},
        {id: 383498, title: "Deadpool 2", tagline: "Prepare for the Second Coming.", vote_average: 0},
        {id: 460019, title: "Truth or Dare", tagline: "", vote_average: 0, vote_count: 0},
        {id: 497802, title: "Pandas", tagline: "WILD AT HEART", vote_average: 0, vote_count: 0},
        {id: 443009, title: "Don’t Worry, He Won’t Get Far on Foot", tagline: "", vote_average: 0},
        {id: 424585, title: "Mademoiselle Paradis", tagline: "", vote_average: 6, vote_count: 2},
        {id: 447365, title: "Guardians of the Galaxy Vol. 3", tagline: "", vote_average: 0, vote_count: 9},
        {id: 299534, title: "Untitled Avengers", tagline: "", vote_average: 0, vote_count: 9},
        {id: 320288, title: "X-Men: Dark Phoenix", tagline: "", vote_average: 0, vote_count: 0},
        {id: 351286, title: "Jurassic World: Fallen Kingdom", tagline: "Life finds a way", vote_average: 0},
        {id: 383498, title: "Deadpool 2", tagline: "Prepare for the Second Coming.", vote_average: 0},
        {id: 460019, title: "Truth or Dare", tagline: "", vote_average: 0, vote_count: 0},
        {id: 497802, title: "Pandas", tagline: "WILD AT HEART", vote_average: 0, vote_count: 0},
        {id: 443009, title: "Don’t Worry, He Won’t Get Far on Foot", tagline: "", vote_average: 0},
        {id: 424585, title: "Mademoiselle Paradis", tagline: "", vote_average: 6, vote_count: 2},
      ],
      offset: 1,
      total: 1136
    })
  })

  it('should handle INCREASE_OFFSET', () => {
    expect(
      movieReducer({
        moviesList: [],
        offset: 0,
        total: 60
      }, { type: INCREASE_OFFSET })
    ).toEqual({
      moviesList: [],
      offset: 9,
      total: 60
    })
  })

  it('should handle RESET_OFFSET', () => {
    expect(
      movieReducer({
        moviesList: [],
        offset: 27,
        total: 60
      }, { type: RESET_OFFSET })
    ).toEqual({
      moviesList: [],
      offset: 0,
      total: 60
    })
  })

})