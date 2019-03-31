import React from 'react';

export default function Input(props) {
  return (
    <input
      type="text"
      name="input"
      placeholder={props.placeholder}
      onChange={props.onChangeHandler}
      onKeyDown={props.onClickHandler}
    />  
  );
}
