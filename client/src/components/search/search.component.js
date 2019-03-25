import React from 'react';

export default function createSearchBar(onChangeHandler, onClickHandler, value='') {
  return (
    <input
      type="text"
      name="input"
      //value={value}
      placeholder="Search"
      onChange={onChangeHandler}
      onKeyDown={onClickHandler}
    />  
  );
}
