import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../common/button/button.component';
import { title, genre } from '../../../consts';
import styles from './searchBar.css';

function SearchBar(props) {

  return (
    <div className={styles.filterBar}>
      <h2>{'search by'.toUpperCase()}</h2>
      {props.searchBy === title ? 
        (
          <Button title={title} onClick={props.onClickFilterButton} size="small" pressed={true}/>
        ) : (
          <Button title={title} onClick={props.onClickFilterButton} size="small"/>
        )
      }
      {props.searchBy === genre ? 
        (
          <Button title={genre} onClick={props.onClickFilterButton} size="small" pressed={true}/>
        ) : (
          <Button title={genre} onClick={props.onClickFilterButton} size="small"/>
        )
      }
      <Button title="SEARCH" onClick={props.onClickSearchButton/*props.onSearchButton*/} size="big"/>
    </div>  
  );
}

SearchBar.propTypes = {
  onClickSearchButton: PropTypes.func,
  onClickFilterButton: PropTypes.func,
  searchBy: PropTypes.string,
  onSearchButton: PropTypes.func
}

export default SearchBar;
