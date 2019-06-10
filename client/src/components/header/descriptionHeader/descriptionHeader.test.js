import React from 'react';
import { shallow } from 'enzyme';
import DescriptionHeader from './descriptionHeader.component';

describe('DescriptionHeader component', () => {
  it('should be render correctly', () => {
    const selectedMovie = {
      title: 'Fifty Shades Freed',
      tagline: 'Don\'t miss the climax',
      release_date: '2018-02-07',
      poster_path: 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
      overview: 'Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.',
      runtime: 10,
    };
    const onClick = jest.fn();
    const component = shallow(<DescriptionHeader data={selectedMovie} onClick={onClick}/>);
    expect(component).toMatchSnapshot();
  });
});
