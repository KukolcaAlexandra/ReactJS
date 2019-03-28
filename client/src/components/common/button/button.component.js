import React from 'react';
import styles from './button.css';

export default function createButton(title, onClickHandler, size='small', pressed=false) {
  let className;
  let classPressed;

  if (size === 'small') {
    className = styles.small;
  } else if (size === 'medium') {
    className = styles.medium;
  } else if (size === 'big') {
    className = styles.big;
  } 
  
  if (pressed) {
    classPressed = styles.pressed;
  }
  
  return (
    <>
      <input
        className={[className, styles.button, classPressed].join(' ')}
        type="button"
        name="button"
        value={title}
        onClick={onClickHandler}
      />  
    </>
  );
}
