// @flow

import React from 'react';
import SearchBar from '../searchBar/searchBar.component';
import Input from '../../common/search/search.component';
import styles from '../header.css';

type Props = {
  onInputChange: Function,
  onClickEnterButton: Function,
  onClickSearchButton: Function,
  onClickSearchByButton: Function,
  searchBy: string,
  onSearchButton: Function,
  searchValue: string,
};

function MainHeader(props: Props) {
  return (
    <div className={styles.header}>
      <h1>{'find your movie'.toUpperCase()}</h1>
      <Input
        onChangeHandler={props.onInputChange}
        onClickHandler={props.onClickEnterButton}
        placeholder='Search'
        value={props.searchValue}
      />
      <SearchBar
        onClickSearchButton={props.onClickSearchButton}
        onClickSearchByButton={props.onClickSearchByButton}
        searchBy={props.searchBy}
        onSearchButton={props.onSearchButton}
      />
    </div>
  );
}

export default MainHeader;
