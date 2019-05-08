import React from 'react';
import Footer from './footer.component';
import {shallow} from 'enzyme';

describe('Footer component', () => {
    
  it('should be render correctly', () => {
    const component = shallow(<Footer/>);
    expect(component).toMatchSnapshot();
  });
    
})