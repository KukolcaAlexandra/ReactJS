import React from 'react';
import Footer from './footer.component';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Footer component', () => {
    
  it('should be render correctly', () => {
    const component = shallow(<Footer/>);
    expect(component).toMatchSnapshot();
  });
    
})