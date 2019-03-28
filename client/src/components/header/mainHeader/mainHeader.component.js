import React from 'react';
import createSearchBar from '../searchBar/searchBar.component';
import createInput from '../../common/search/search.component';
import styles from '../header.css';

export default function createMainHeader (
  onInputChangeHandler,
  onClickEnterButton,
  onClickSearchButton,
  onClickFilterButton,
  searchBy) {
    return (
      <div className={styles.header}>
        <h1>{'find your movie'.toUpperCase()}</h1>
        {createInput(onInputChangeHandler, onClickEnterButton, 'Search')}
        {createSearchBar(onClickSearchButton, onClickFilterButton, searchBy)}
      </div>
    )
}
