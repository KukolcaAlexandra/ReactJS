import React from 'react';
import App from './app';
import {shallow} from 'enzyme';

describe('App component', () => {
    
  it('should be render correctly', () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });

  it('should set state "searchResult" after onClickSearchButton', () => {
    const component = shallow(<App/>);
    const searchValue = 'last';
    const instance = component.instance();
    instance.onClickSearchButton(searchValue);
    expect(component.state('searchResult').length).toBe(1);
  });

  it('should set state "searchResult" to [] for empty searchValue after onClickSearchButton', () => {
    const component = shallow(<App/>);
    const searchValue = '';
    const instance = component.instance();
    instance.onClickSearchButton(searchValue);
    expect(component.state('searchResult').length).toBe(0);
  });

  it('should set state "searchBy" to genre after onClickFilterButton', () => {
    const component = shallow(
      <App/>
    );
    const instance = component.instance();
    const event = {
      'target': {
        'value': 'genre',
      }
    }
    instance.onClickFilterButton(event);
    expect(component.state('searchBy')).toBe('genre');
  });

  it('should set state "selectedMovie" after onMovieClick', () => {
    const data={
      'id': 123,
      'title': 'Fifty Shades Freed',
      'tagline': `Don't miss the climax`,
      'release_date': '2018-02-07',
      'poster_path': 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
      'overview': 'Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.',
      'runtime': 100
    };
    const scrollToSpy = jest.fn();
    global.scrollTo = scrollToSpy;

    const component = shallow(
      <App/>
    );
    const instance = component.instance();
    instance.onMovieClick(data);
    expect(component.state('selectedMovie')).toEqual(data);
  });
    
  it('should clear state after onBackButton', () => {
    const component = shallow(
      <App/>
    );
    const instance = component.instance();
    instance.onBackButton();
    expect(component.state('searchResult').length).toBe(0);
    expect(component.state('selectedMovie')).toBeNull();
  });
})
