import React from 'react';
import { Header } from './header.container';
import {shallow, mount} from 'enzyme';
import { Provider } from 'react-redux';

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
    selectedMovie={
      'title': 'Fifty Shades Freed',
      'tagline': `Don't miss the climax`,
      'release_date': '2018-02-07',
      'poster_path': 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
      'overview': 'Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.',
      'runtime': 100
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
      <Header/>
    );
    expect(component).toMatchSnapshot();
  });  

  /*it('should be render correctly', () => {
    selectedMovie = null;
    const component = shallow(
      <Header
        selectedMovie={selectedMovie}
        onBackButton={onBackButton}
        onClickFilterButton={onClickFilterButton}
        onClickSearchButton={onClickSearchButton}
        searchBy = {searchBy}
      />
    );
    expect(component).toMatchSnapshot();
  });  */
  
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
      />);
    const instance = component.instance();
    const event = {
      'keyCode': 13,
    }
    //console.log(instance);
    //const spy = jest.spyOn(ErrorBoundary.prototype, 'componentDidCatch');
    //instance.onClickSearchButton = jest.fn();
    //instance.onClickEnterButton(event);
    //const onClickEnterButton = jest.fn();
    //expect(onClickEnterButton).toHaveBeenCalled();
  });

  /*it('should be onClickSearchButton call', () => {
    const component = shallow(
      <Header
        selectedMovie={selectedMovie}
        onBackButton={onBackButton}
        onClickFilterButton={onClickFilterButton}
        onClickSearchButton={onClickSearchButton}
        searchBy = {searchBy}
      />
    );
    const instance = component.instance();
    const event = {
      'keyCode': 13,
    }
    instance.onClickEnterButton(event);
    expect(onClickSearchButton).toHaveBeenCalled();
  });*/

  /*it('should set state "searchBy" to genre after onClickFilterButton', () => {
    const component = shallow(
      <Header
        selectedMovie={selectedMovie}
        onBackButton={onBackButton}
        onClickFilterButton={onClickFilterButton}
        onClickSearchButton={onClickSearchButton}
        searchBy = {searchBy}
      />
    );
    const instance = component.instance();
    const event = {
      'target': {
        'value': 'genre',
      }
    }
    instance.onClickFilterButton(event);
    expect(component.state('searchBy')).toBe('genre');
  });*/

  /*it('should set State to input value after onInputChangeHandler', () => {
    const component = shallow(
      <Header
        selectedMovie={selectedMovie}
        onBackButton={onBackButton}
        onClickFilterButton={onClickFilterButton}
        onClickSearchButton={onClickSearchButton}
        searchBy = {searchBy}
      />
    );
    const instance = component.instance();
    const event = {
      'target': {
        'value': 'adv',
      }
    }
    instance.onInputChangeHandler(event);
    expect(component.state('searchValue')).toBe('adv');
  });*/

})
