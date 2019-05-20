import React from 'react';
import { shallow, mount } from 'enzyme';
import { Header } from './header.container';

describe('Header component', () => {
  let searchResult;
  let searchBy;
  let selectedMovie;
  let searchValue;
  let loadMovies;
  let setSearchValue;
  let setSearchBy;
  let resetSelectedMovie;
  let resetOffset;

  beforeEach(() => {
    searchResult = [];
    searchBy = 'TITLE';
    selectedMovie = {
      title: 'Fifty Shades Freed',
      tagline: 'Don\'t miss the climax',
      release_date: '2018-02-07',
      poster_path: 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
      overview: 'Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.',
      runtime: 100,
    };
    searchValue = 'adv';
    loadMovies = jest.fn();
    setSearchValue = jest.fn();
    setSearchBy = jest.fn();
    resetSelectedMovie = jest.fn();
    resetOffset = jest.fn();
  });

  it('should be render correctly', () => {
    const component = shallow(
      <Header/>,
    );
    expect(component).toMatchSnapshot();
  });

  it('should be onClickEnterButton call', () => {
    const component = mount(
      <Header
        searchResult={searchResult}
        searchBy={searchBy}
        selectedMovie={selectedMovie}
        searchValue={searchValue}
        loadMovies={loadMovies}
        setSearchValue={setSearchValue}
        setSearchBy={setSearchBy}
        resetSelectedMovie={resetSelectedMovie}
        resetOffset={resetOffset}
      />,
    );
    expect(component).toMatchSnapshot();
  });
});
