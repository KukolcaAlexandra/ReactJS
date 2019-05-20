import React from 'react';
import { shallow } from 'enzyme';
import Input from './search.component';

describe('Input component', () => {
  it('should be render correctly', () => {
    const onInputChangeHandler = jest.fn();
    const onClickEnterButton = jest.fn();
    const component = shallow(
        <Input
          onInputChangeHandler={onInputChangeHandler}
          onClickEnterButton={onClickEnterButton}
          placeholder='Search'
        />,
    );
    expect(component).toMatchSnapshot();
  });
});
