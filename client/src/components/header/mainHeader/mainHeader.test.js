import React from 'react';
import MainHeader from './mainHeader.component';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('MainHeader component', () => {
    
  it('should be render correctly', () => {
    const onInputChange = jest.fn();
    const onClickEnterButton = jest.fn();
    const onClickSearchButton = jest.fn();
    const onClickFilterButton = jest.fn();
    const searchBy = 'TITLE';

    const component = shallow(
      <MainHeader
        onInputChange={onInputChange}
        onClickEnterButton={onClickEnterButton}
        onClickSearchButton={onClickSearchButton}
        onClickFilterButton={onClickFilterButton}
        searchBy={searchBy}
      />
    );
    expect(component).toMatchSnapshot();
  });    
})
