import React from 'react';
import Header from './header.container';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Header component', () => {
  let selectedMovie;
  let onBackButton;
  let onClickFilterButton;
  let onClickSearchButton;
  let searchBy;

  beforeEach(() => {
    selectedMovie={
      'title': 'Fifty Shades Freed',
      'tagline': `Don't miss the climax`,
      'release_date': '2018-02-07',
      'poster_path': 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
      'overview': 'Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.',
      'runtime': 100
    };
    onBackButton = jest.fn();
    onClickFilterButton = jest.fn();
    onClickSearchButton = jest.fn();
    searchBy = 'TITLE';
  });

  it('should be render correctly', () => {
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
  });  

  it('should be render correctly', () => {
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
  });  
  
  it('should be onClickSearchButton call', () => {
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
  });

  it('should set State to input value after onInputChangeHandler', () => {
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
  });

})
