import React from 'react';
import { shallow, mount } from 'enzyme';
import MovieBlock from './movieBlock.component';

describe('MovieBlock component', () => {
  let movie;
  let onMovieClick;

  beforeEach(() => {
    movie = {
      id: 123,
      title: 'Fifty Shades Freed',
      tagline: 'Don\'t miss the climax',
      release_date: '2018-02-07',
      poster_path: 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
      overview: 'Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.',
      runtime: 100,
      genres: [
        'Drama',
        'Romance',
      ],
    };
    onMovieClick = jest.fn();
  });

  it('should be render correctly', () => {
    const component = shallow(
      <MovieBlock
        data={movie}
        key={movie.id}
        onMovieClick={onMovieClick}
      />,
    );
    expect(component).toMatchSnapshot();
  });

  it('should be render correctly', () => {
    const component = mount(
      <MovieBlock
        data={movie}
        key={movie.id}
        onMovieClick={onMovieClick}
      />,
    );
    component.find('.container').simulate('click');
  });
});
