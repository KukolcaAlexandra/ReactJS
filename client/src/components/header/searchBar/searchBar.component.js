import React from 'react';
import createButton from '../../common/button/button.component';
import { title, genre } from '../../../consts';
import styles from './searchBar';

export default function createSearchBar(onClickSearchButton, onClickFilterButton, searchBy) {

  return (
    <div className={styles.filterBar}>
      <h2>{'search by'.toUpperCase()}</h2>
      {searchBy === title ? createButton(title, onClickFilterButton, 'small', true) : createButton(title, onClickFilterButton, 'small')}
      {searchBy === genre ? createButton(genre, onClickFilterButton, 'small', true) : createButton(genre, onClickFilterButton, 'small')}
      {createButton('SEARCH', onClickSearchButton, 'big')}
    </div>  
  );
}
