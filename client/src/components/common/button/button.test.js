import React from 'react';
import Button from './button.component';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Button component', () => {
    
  it('big button should be render correctly', () => {
    const onClick = jest.fn();
    const component = shallow(<Button title="Search" onClick size='big'/>);
    expect(component).toMatchSnapshot();
  });

  it('medium button should be render correctly', () => {
    const onClick = jest.fn();
    const component = shallow(<Button title="Genre" onClick size='medium'/>);
    expect(component).toMatchSnapshot();
  });

  it('small button should be render correctly', () => {
    const onClick = jest.fn();
    const component = shallow(<Button title="Search" onClick size='small'/>);
    expect(component).toMatchSnapshot();
  });

  /*it('should be call onClickHandler', () => {
    const onClick = jest.fn();
    const component = mount(<Button title="Search" onClick={onClick} size='big'/>);
    const button = component.find('[type="button"]').simulate('click');
    expect(onClick).toHaveBeenCalled();
  })*/

})
