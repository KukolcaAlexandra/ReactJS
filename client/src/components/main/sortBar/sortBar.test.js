import React from 'react';
import SortBar from './sortBar.component';
import {shallow, configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('SortBar component', () => {
    
  it('should be render correctly', () => {
    const selectedMovie={
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
    const length = 1;
    const sortBy = 'rating';
    const onChangeSortBy = jest.fn();
    const component = shallow(
      <SortBar
          selectedMovie={selectedMovie}
          count={length}
          sortBy={sortBy}
          onChangeSortBy={onChangeSortBy}
        />
    );
    expect(component).toMatchSnapshot();
  });
  
  it('should be render correctly', () => {
    const selectedMovie=null;
    const length = 1;
    const sortBy = 'rating';
    const onChangeSortBy = jest.fn();
    const component = mount(
      <SortBar
          selectedMovie={selectedMovie}
          count={length}
          sortBy={sortBy}
          onChangeSortBy={onChangeSortBy}
        />
    );
    expect(component).toMatchSnapshot();
  }); 
})
