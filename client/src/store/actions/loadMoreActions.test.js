import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import expect from 'expect';
import { LOAD_MORE_SUCCESS } from './actionTypes';
import { loadMore } from './loadMoreActions';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates LOAD_MORE_SUCCESS when fetching movies has been done', () => {
    const url = 'https://reactjs-cdp.herokuapp.com/movies?sortBy=release_date&sortOrder=desc&search=last&searchBy=undefined&offset=0&limit=9';
    fetchMock.getOnce(url, {
      body: {
        data: [
          {
            id: 447365, title: 'Guardians of the Galaxy Vol. 3', tagline: '', vote_average: 0, vote_count: 9,
          },
          {
            id: 299534, title: 'Untitled Avengers', tagline: '', vote_average: 0, vote_count: 9,
          },
          {
            id: 320288, title: 'X-Men: Dark Phoenix', tagline: '', vote_average: 0, vote_count: 0,
          },
          {
            id: 351286, title: 'Jurassic World: Fallen Kingdom', tagline: 'Life finds a way', vote_average: 0,
          },
          {
            id: 383498, title: 'Deadpool 2', tagline: 'Prepare for the Second Coming.', vote_average: 0,
          },
          {
            id: 460019, title: 'Truth or Dare', tagline: '', vote_average: 0, vote_count: 0,
          },
          {
            id: 497802, title: 'Pandas', tagline: 'WILD AT HEART', vote_average: 0, vote_count: 0,
          },
          {
            id: 443009, title: 'Don’t Worry, He Won’t Get Far on Foot', tagline: '', vote_average: 0,
          },
          {
            id: 424585, title: 'Mademoiselle Paradis', tagline: '', vote_average: 6, vote_count: 2,
          },
        ],
        limit: 9,
        offset: 0,
        total: 1136,
      },
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      {
        type: LOAD_MORE_SUCCESS,
        payload: {
          data: [
            {
              id: 447365, title: 'Guardians of the Galaxy Vol. 3', tagline: '', vote_average: 0, vote_count: 9,
            },
            {
              id: 299534, title: 'Untitled Avengers', tagline: '', vote_average: 0, vote_count: 9,
            },
            {
              id: 320288, title: 'X-Men: Dark Phoenix', tagline: '', vote_average: 0, vote_count: 0,
            },
            {
              id: 351286, title: 'Jurassic World: Fallen Kingdom', tagline: 'Life finds a way', vote_average: 0,
            },
            {
              id: 383498, title: 'Deadpool 2', tagline: 'Prepare for the Second Coming.', vote_average: 0,
            },
            {
              id: 460019, title: 'Truth or Dare', tagline: '', vote_average: 0, vote_count: 0,
            },
            {
              id: 497802, title: 'Pandas', tagline: 'WILD AT HEART', vote_average: 0, vote_count: 0,
            },
            {
              id: 443009, title: 'Don’t Worry, He Won’t Get Far on Foot', tagline: '', vote_average: 0,
            }, {
              id: 424585, title: 'Mademoiselle Paradis', tagline: '', vote_average: 6, vote_count: 2,
            },
          ],
          limit: 9,
          offset: 0,
          total: 1136,
        },
      },
    ];
    const store = mockStore({
      searchParams: {
        searchValue: 'last',
        sortBy: 'release_date',
      },
      loadedMovies: {
        offset: 0,
      },
    });

    return store.dispatch(loadMore()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
