import React from 'react';
import Header from './header.container';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Header component', () => {
    
  it('should be render correctly', () => {
    const selectedMovie={
      'title': 'Fifty Shades Freed',
      'tagline': `Don't miss the climax`,
      'release_date': '2018-02-07',
      'poster_path': 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
      'overview': 'Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.',
      'runtime': 100
    };
    const onBackButton = jest.fn();
    const onClickFilterButton = jest.fn();
    const onClickSearchButton = jest.fn();
    const searchBy = 'TITLE';

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
  /*
  it('should be render correctly', () => {
    
    const selectedMovie={
      'title': 'Fifty Shades Freed',
      'tagline': `Don't miss the climax`,
      'release_date': '2018-02-07',
      'poster_path': 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
      'overview': 'Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.',
      'runtime': 100
    };
    const onBackButton = jest.fn();
    const onClickFilterButton = jest.fn();
    const onClickSearchButton = jest.fn();
    const searchBy = 'TITLE';

    const component = shallow(
      <Header
        selectedMovie={selectedMovie}
        onBackButton={onBackButton}
        onClickFilterButton={onClickFilterButton}
        onClickSearchButton={onClickSearchButton}
        searchBy = {searchBy}
      />
    );
    component.onClickEnterButton();
    expect(onClickSearchButton).toHaveBeenCalled();
  });*/

})
