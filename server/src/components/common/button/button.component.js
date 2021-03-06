import React from 'react';
import styles from './button.css';

export default function Button(props) {
  let className;
  let classPressed;

  if (props.size === 'small') {
    className = styles.small;
  } else if (props.size === 'medium') {
    className = styles.medium;
  } else if (props.size === 'big') {
    className = styles.big;
  } else if (props.size === 'loadMore') {
    className = styles.loadMore;
  } 
  
  if (props.pressed) {
    classPressed = styles.pressed;
  }
  
  return (
      <input
        className={[className, styles.button, classPressed].join(' ')}
        type="button"
        name="button"
        value={props.title}
        onClick={props.onClick}
      />
  );
}
