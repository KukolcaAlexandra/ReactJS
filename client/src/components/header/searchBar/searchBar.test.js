import React from 'react';
import SearchBar from './searchBar.component';
import {shallow} from 'enzyme';

describe('SearchBar component', () => {
    
  it('should be render correctly with Title', () => {
    const onClickSearchButton = jest.fn();
    const onClickFilterButton = jest.fn();
    const searchBy = 'TITLE';

    const component = shallow(
      <SearchBar
        onClickSearchButton={onClickSearchButton}
        onClickFilterButton={onClickFilterButton}
        searchBy={searchBy}
      />
    );
    expect(component).toMatchSnapshot();
  });  
  
  it('should be render correctly with Genre', () => {
    const onClickSearchButton = jest.fn();
    const onClickFilterButton = jest.fn();
    const searchBy = 'GENRE';

    const component = shallow(
      <SearchBar
        onClickSearchButton={onClickSearchButton}
        onClickFilterButton={onClickFilterButton}
        searchBy={searchBy}
      />
    );
    expect(component).toMatchSnapshot();
  });  
  
})