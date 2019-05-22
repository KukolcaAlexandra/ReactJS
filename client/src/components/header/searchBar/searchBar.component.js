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
          <Button title={title} nativeOnClick={props.onClickSearchByButton} onClick={props.onClickSearchByButton} size="small" pressed={true}>
            {title}
          </Button>
        ) : (
          <Button onClick={props.onClickSearchByButton} size="small">
            {title}
          </Button>
        )
      }
      {props.searchBy === genre
        ? (
          <Button onClick={props.onClickSearchByButton} size="small" pressed={true}>
            {genre}
          </Button>
        ) : (
          <Button onClick={props.onClickSearchByButton} size="small">
            {genre}
          </Button>
        )
      }
      <Button onClick={props.onClickSearchButton} big size="big">
        SEARCH
      </Button>
    </div>
  );
}

export default SearchBar;
