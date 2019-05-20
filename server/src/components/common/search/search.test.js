import React from 'react';
import Input from './search.component';
import {shallow} from 'enzyme';

describe('Input component', () => {
    
    it('should be render correctly', () => {
      const onInputChangeHandler = jest.fn();
      const onClickEnterButton = jest.fn();
      const component = shallow(
        <Input
          onInputChangeHandler={onInputChangeHandler}
          onClickEnterButton={onClickEnterButton}
          placeholder='Search'
        />
      );
      expect(component).toMatchSnapshot();
    });
})
