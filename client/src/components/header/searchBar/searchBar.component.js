// @flow

import React from 'react';
import Button from '../../common/button/button.component';
import { title, genre } from '../../../consts';
import styles from './searchBar.css';

type Props = {
  onClickSearchButton: Function,
  onClickSearchByButton: Function,
  searchBy: string,
  onSearchButton: Function,
};

function SearchBar(props: Props) {
  return (
    <div className={styles.filterBar}>
      <h2>{'search by'.toUpperCase()}</h2>
      {props.searchBy === title
        ? (
          <Button title={title} onClick={props.onClickSearchByButton} size="small" pressed={true}/>
        ) : (
          <Button title={title} onClick={props.onClickSearchByButton} size="small"/>
        )
      }
      {props.searchBy === genre
        ? (
          <Button title={genre} onClick={props.onClickSearchByButton} size="small" pressed={true}/>
        ) : (
          <Button title={genre} onClick={props.onClickSearchByButton} size="small"/>
        )
      }
      <Button title="SEARCH" onClick={props.onClickSearchButton} size="big"/>
    </div>
  );
}

export default SearchBar;
