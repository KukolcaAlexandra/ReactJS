import React from 'react';
import SearchBar from '../searchBar/searchBar.component';
import Input from '../../common/search/search.component';
import styles from '../header.css';

export default function MainHeader (props) {
  return (
    <div className={styles.header}>
      <h1>{'find your movie'.toUpperCase()}</h1>
      <Input
        onChangeHandler={props.onInputChange}
        onClickHandler={props.onClickEnterButton}
        placeholder='Search'
      />
      <SearchBar
        onClickSearchButton={props.onClickSearchButton}
        onClickFilterButton={props.onClickFilterButton}
        searchBy={props.searchBy}
      />
    </div>
  )
}
