import React from 'react';

export default function createSearchBar(value, onChangeHandler, onClickHandler) {
  return (
    <input
      type="text"
      name="input"
      value={value}
      onChange={onChangeHandler}
      onKeyDown={onClickHandler}
    />  
  );
}
