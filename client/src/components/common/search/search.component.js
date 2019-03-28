import React from 'react';

export default function createInput(onChangeHandler, onClickHandler, placeholder='') {
  return (
    <input
      type="text"
      name="input"
      placeholder={placeholder}
      onChange={onChangeHandler}
      onKeyDown={onClickHandler}
    />  
  );
}
