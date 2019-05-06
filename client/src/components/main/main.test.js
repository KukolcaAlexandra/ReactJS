import React from 'react';
import Main from './main.container';
import {shallow} from 'enzyme';

describe('Main component', () => {
  let selectedMovie;
  let searchResult;
  let onMovieClick;

  beforeEach(() => {
    selectedMovie={
      'title': 'Fifty Shades Freed',
      'tagline': `Don't miss the climax`,
      'release_date': '2018-02-07',
      'poster_path': 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
      'overview': 'Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.',
      'runtime': 100,
      "genres": [
        "Drama",
        "Romance"
      ],
    };
    searchResult = [selectedMovie];
    onMovieClick = jest.fn();
  });
  
  it('should be render correctly', () => {
    
    const component = shallow(
      <Main
        selectedMovie={selectedMovie}
        searchResult={searchResult}
        onMovieClick={onMovieClick}
      />
    );
    expect(component).toMatchSnapshot();
  });   
  
  it('should set state to "rating" after onChangeSortBy', () => {

    const wrapper = shallow(<Main
      selectedMovie={selectedMovie}
      searchResult={searchResult}
      onMovieClick={onMovieClick}
    />);
    const instance = wrapper.instance();
    const sortBy = 'rating';
    const event = {
      'target': {
        'innerText': sortBy,
      }
    }
    instance.onChangeSortBy(event);
    expect(wrapper.state('sortBy')).toBe(sortBy);
  });

  it('should set state to "release date" after onChangeSortBy', () => {

    const wrapper = shallow(<Main
      selectedMovie={selectedMovie}
      searchResult={searchResult}
      onMovieClick={onMovieClick}
    />);
    const instance = wrapper.instance();
    const sortBy = 'release date';
    const event = {
      'target': {
        'innerText': sortBy,
      }
    }
    instance.onChangeSortBy(event);
    expect(wrapper.state('sortBy')).toBe(sortBy);
  });
})
