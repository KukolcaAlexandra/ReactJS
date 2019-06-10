import React from 'react';
import { shallow } from 'enzyme';
import Button from './button.component';

describe('Button component', () => {
  it('big button should be render correctly', () => {
    const onClick = jest.fn();
    const component = shallow(<Button title="Search" onClick={onClick} size='big'/>);
    expect(component).toMatchSnapshot();
  });

  it('medium button should be render correctly', () => {
    const onClick = jest.fn();
    const component = shallow(<Button title="Genre" onClick={onClick} size='medium'/>);
    expect(component).toMatchSnapshot();
  });

  it('small button should be render correctly', () => {
    const onClick = jest.fn();
    const component = shallow(<Button title="Search" onClick={onClick} size='small'/>);
    expect(component).toMatchSnapshot();
  });

  it('pressed button should be render correctly', () => {
    const onClick = jest.fn();
    const component = shallow(<Button title="Search" onClick={onClick} size='small' pressed={true}/>);
    expect(component).toMatchSnapshot();
  });
});
