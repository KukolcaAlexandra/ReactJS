import React from 'react';
import createButton from '../button/button.component';
import { title, genre } from '../../consts';
import styles from './searchFilterBar';

export default function createSearchFilterBar(onClickSearchButton, onClickFilterButton) {
  return (
    <div className={styles.filterBar}>
      <h2>{'search by'.toUpperCase()}</h2>
      {createButton(title, onClickFilterButton, 'small')}
      {createButton(genre, onClickFilterButton, 'small')}
      {createButton('SEARCH', onClickSearchButton, 'big')}
    </div>  
  );
}
