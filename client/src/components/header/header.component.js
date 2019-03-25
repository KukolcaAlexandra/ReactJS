import React from 'react';
import createSearchBar from '../search/search.component';
import createSearchFilterBar from '../searchFilterBar/searchFilterBar.component';
import styles from './header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);

    //this.onClickEnterButton = this.onClickEnterButton.bind(this);
    //this.onInputChangeHandler = this.onInputChangeHandler.bind(this);
    //this.onClickSearchButton = this.onClickSearchButton.bind(this);
    //this.onClickFilterButton = this.onClickFilterButton.bind(this);
  }

  

  render() {
    const { 
      onInputChangeHandler,
      onClickEnterButton,
      onClickSearchButton,
      onClickFilterButton,
      searchBy
    } = this.props;
    return (
      <div className={styles.header}>
        <h1>{'find your movie'.toUpperCase()}</h1>
        {createSearchBar(onInputChangeHandler, onClickEnterButton)}
        {createSearchFilterBar(onClickSearchButton, onClickFilterButton, searchBy)}
      </div>
    );
  }
}

export default Header;
