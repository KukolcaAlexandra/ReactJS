import React from 'react';
import Input from './search.component';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Input component', () => {
    
    it('should be render correctly', () => {
      const onInputChangeHandler = jest.fn();
      const onClickEnterButton = jest.fn();
      const component = shallow(<Input onInputChangeHandler onClickEnterButton placeholder='Search'/>);
      expect(component).toMatchSnapshot();
    });
/*
    it('should be call onClickHandler', () => {
      const onInputChangeHandler = jest.fn();
      const onClickEnterButton = jest.fn();
      const component = shallow(<Input onInputChangeHandler onClickEnterButton placeholder='Search'/>);
      //const inp = component.find('.inp').simulate('change');
      //const inp = component.find('.inp').simulate('keydown', { keyCode: 13 });
      //input.simulate('keydown', { keyCode: 13 });
      //input.simulate('change', { target: { value: 'abcdefg'} });
      const inp = component.find('.inp').simulate('change', { target: { value: 'abcdefg'} });
      //expect(onClickEnterButton).toHaveBeenCalled();
      expect(onInputChangeHandler).toHaveBeenCalled();
    })*/
})
