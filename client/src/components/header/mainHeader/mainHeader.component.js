import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../searchBar/searchBar.component';
import Input from '../../common/search/search.component';
import styles from '../header.css';

function MainHeader (props) {
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
        onSearchButton={props.onSearchButton}
      />
    </div>
  )
}

MainHeader.propTypes = {
  onInputChange: PropTypes.func,
  onClickEnterButton: PropTypes.func,
  onClickSearchButton: PropTypes.func,
  onClickFilterButton: PropTypes.func,
  searchBy: PropTypes.string,
  onSearchButton: PropTypes.func,
}

export default MainHeader;
