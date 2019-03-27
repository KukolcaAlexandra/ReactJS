import React from 'react';
import createSearchBar from '../search/search.component';
import createSearchFilterBar from '../searchFilterBar/searchFilterBar.component';
import styles from './header.css';
import DescriptionHeader from '../descriptionHeader/descriptionHeader.component';

class Header extends React.Component {
  
  render() {
    const { 
      selectedMovie,
      onBackButton,
      onInputChangeHandler,
      onClickEnterButton,
      onClickSearchButton,
      onClickFilterButton,
      searchBy
    } = this.props;

    console.log(selectedMovie);
    
    return selectedMovie ? (
      <DescriptionHeader data={selectedMovie} onClickSearchButton={onBackButton}>SelectedMovie {selectedMovie.id}</DescriptionHeader>
    ):(
      <div className={styles.header}>
        <h1>{'find your movie'.toUpperCase()}</h1>
        {createSearchBar(onInputChangeHandler, onClickEnterButton)}
        {createSearchFilterBar(onClickSearchButton, onClickFilterButton, searchBy)}
      </div>
    );
  }
}

export default Header;
