import React from 'react';
import { shallow } from 'enzyme';
import Footer from './footer.component';

describe('Footer component', () => {
  it('should be render correctly', () => {
    const component = shallow(<Footer/>);
    expect(component).toMatchSnapshot();
  });
});
