import React from 'react';
import createSearchBar from '../search/search.component';
import createSearchFilterBar from '../searchFilterBar/searchFilterBar.component';
import styles from './main.css';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.main}>
        Main content
      </div>
    );
  }
}

export default Main;
